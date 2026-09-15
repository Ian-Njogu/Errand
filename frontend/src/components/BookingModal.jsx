import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const BookingModal = ({ service, onClose }) => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!service) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to book a service");
      return;
    }
    
    setLoading(true);
    try {
      // Create the order
      const res = await axios.post('/orders/', {
        service: service.id,
        service_variant: selectedVariant || null,
        task_details: details,
        // Using mock locations since we don't have location inputs yet
        pickup_address: "Client Address",
        dropoff_address: "Destination Address"
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Failed to book service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card-elevated" style={{ width: '90%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
        
        {success ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h2 className="h2" style={{ marginBottom: '8px' }}>Booking Confirmed!</h2>
            <p className="body" style={{ color: 'var(--muted)', marginBottom: '24px' }}>
              Your task has been broadcasted to available runners.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 className="h2">Book {service.name}</h2>
              <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }} onClick={onClose}>&times;</button>
            </div>

            <form onSubmit={handleSubmit}>
              {service.variants && service.variants.length > 0 && (
                <div className="input-group">
                  <label className="label">Location / Pricing Tier</label>
                  <select 
                    className="input" 
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    required
                  >
                    <option value="">Select a tier...</option>
                    {service.variants.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.location_name || v.description} - KES {v.price} {v.max_price ? `- ${v.max_price}` : ''}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="input-group">
                <label className="label">Task Details & Instructions</label>
                <textarea 
                  className="input" 
                  rows="4" 
                  placeholder="What exactly do you need done?"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
