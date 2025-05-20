import { useState, useEffect } from 'react';
import './index.css';
import Login from './components/Login';
import Weather from './components/Weather';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <Weather onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}