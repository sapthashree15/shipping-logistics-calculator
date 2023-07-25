// AgentDashboard.js
import React, { useState } from 'react';
import { getFreightRates, addFreightRate } from '../data';

const AgentDashboard = ({ logout }) => {
  const [destination, setDestination] = useState('');
  const [rate, setRate] = useState('');
  const [error, setError] = useState('');

  const freightRates = getFreightRates();

  const handleAddFreightRate = (e) => {
    e.preventDefault();

    // Input validation
    if (!destination || !rate) {
      setError('Please enter both destination and rate.');
      return;
    }

    // Convert rate to a number
    const rateNumber = parseFloat(rate);

    // Check if the rate is a valid number
    if (isNaN(rateNumber) || rateNumber <= 0) {
      setError('Please enter a valid positive rate.');
      return;
    }

    // Add freight rate to the data
    addFreightRate(destination, rateNumber);

    // Clear input fields and error message
    setDestination('');
    setRate('');
    setError('');
  };

  return (
    <div>
      <h2>Welcome, Agent!</h2>
      <button onClick={logout}>Logout</button>
      <h3>Add Freight Rate</h3>
      <form onSubmit={handleAddFreightRate}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Destination: </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <label>Rate: </label>
          <input
            type="number"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h3>Freight Rates</h3>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {freightRates.map((rate, index) => (
            <tr key={index}>
              <td>{rate.destination}</td>
              <td>${rate.rate.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentDashboard;
