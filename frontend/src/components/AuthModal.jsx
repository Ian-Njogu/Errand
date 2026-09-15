import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const AuthModal = ({ onClose }) => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      const res = await login(username, password);
      if (res.success) {
        onClose();
      } else {
        setError(res.error);
      }
    } else {
      // Mock signup
      if (!username || !password || !phone) {
        setError("Please fill all fields");
        return;
      }
      const res = await login(username, password); // Mock auto-login after signup
      if (res.success) onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card-elevated" style={{ width: '90%', maxWidth: '400px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 className="h2">{isLogin ? 'Welcome Back' : 'Join Errand'}</h2>
          <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }} onClick={onClose}>&times;</button>
        </div>

        {error && <div style={{ color: 'red', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Username</label>
            <input 
              type="text" 
              className="input" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required 
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label className="label">M-Pesa Phone Number</label>
              <input 
                type="text" 
                className="input" 
                placeholder="2547XXXXXXXX"
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
                required 
              />
            </div>
          )}

          <div className="input-group">
            <label className="label">Password</label>
            <input 
              type="password" 
              className="input" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <span className="body" style={{ color: 'var(--muted)' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button 
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
