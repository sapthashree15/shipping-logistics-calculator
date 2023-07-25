// AdminDashboard.js
import React, { useState } from 'react';
import { addFreightRate, getFreightRates } from '../data';


const AdminDashboard = ({ logout }) => {
  const [destination, setDestination] = useState('');
  const [rate, setRate] = useState('');

  const handleAddFreightRate = (e) => {
    e.preventDefault();
    addFreightRate(destination, parseFloat(rate));
    setDestination('');
    setRate('');
  };

  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button onClick={logout}>Logout</button>
      <h3>Add Freight Rate</h3>
      <form onSubmit={handleAddFreightRate}>
        <div>
          <label>Destination: </label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div>
          <label>Rate: </label>
          <input type="number" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
