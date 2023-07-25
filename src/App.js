import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import AgentDashboard from './components/AgentDashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Mock authentication function
  const login = (username, password) => {
    // Add your authentication logic here (e.g., check credentials against a backend)
    // For simplicity, we'll use a hardcoded Admin user and password
    if (username === 'admin' && password === 'admin') {
      setUser({ role: 'admin' });
      setError('');
    } else if (username === 'agent' && password === 'agent') {
      setUser({ role: 'agent' });
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    setError('');
  };

  return (
    <div>
      {user ? (
        user.role === 'admin' ? (
          <AdminDashboard logout={logout} />
        ) : (
          <AgentDashboard logout={logout} />
        )
      ) : (
        <LoginPage login={login} error={error} />
      )}
    </div>
  );
};

export default App;
