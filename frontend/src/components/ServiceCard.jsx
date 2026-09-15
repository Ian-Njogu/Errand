import React from 'react';

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer' }} onClick={() => onClick(service)}>
      <div>
        <h3 className="h3-strong">{service.name}</h3>
        {service.description && <p className="body" style={{ marginTop: '8px', color: 'var(--muted)' }}>{service.description}</p>}
      </div>
      
      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="label" style={{ color: 'var(--muted)' }}>Starting at</span>
          <span className="title" style={{ color: 'var(--primary)' }}>
            {service.base_price ? `KES ${service.base_price}` : 'Varied'}
          </span>
        </div>
        
        {service.variants && service.variants.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            {service.variants.slice(0, 3).map(v => (
              <span key={v.id} className="badge">
                {v.location_name || v.description}
              </span>
            ))}
            {service.variants.length > 3 && (
              <span className="badge">+{service.variants.length - 3} more</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
