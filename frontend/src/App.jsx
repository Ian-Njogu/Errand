import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import './index.css';

const AppContent = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services
    axios.get('/services/')
      .then(res => setServices(res.data))
      .catch(err => console.error("Error fetching services:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Navbar onLoginClick={() => setShowAuthModal(true)} />
      
      <main className="container" style={{ padding: '60px 24px', minHeight: 'calc(100vh - 70px)' }}>
        <h1 className="display-lg" style={{ marginBottom: '16px' }}>What do you need help with?</h1>
        <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '40px' }}>
          Book trusted agents for errands, shopping, and deliveries.
        </p>

        {loading ? (
          <div className="body">Loading services...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={setSelectedService} 
              />
            ))}
          </div>
        )}
      </main>

      {selectedService && (
        <BookingModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
