import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create context
const AuthContext = createContext(null);

// Configure axios base url
axios.defaults.baseURL = 'http://localhost:8000/api/';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from local storage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        // You would typically set the axios auth header here as well
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (e) {
        console.error("Failed to parse stored user", e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    // Note: Since the backend doesn't have a specific login endpoint yet,
    // we'll mock this for now to demonstrate the flow. In a real scenario,
    // this would post to /api/token/ or similar.
    
    // Mock login success
    if (username && password) {
      const mockUser = {
        id: 1,
        username: username,
        is_client: true,
        is_runner: false,
        token: 'mock-jwt-token'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
