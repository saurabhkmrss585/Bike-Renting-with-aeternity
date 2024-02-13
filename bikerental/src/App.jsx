import React, { useState } from 'react';
import './BikeRentalSystem.css'; // Import CSS file
import Connect from './assets/Connect'
function App() {
  const [bikeOwner, setBikeOwner] = useState('');
  const [bikeRenter, setBikeRenter] = useState('');
  const [amount, setAmount] = useState(0);
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const totalAmount = amount * days;
    setTotal(totalAmount);
  };

  return (
    <div className='App'>
      <h1>Bike Rental System</h1>
      <form className="form-container"> {/* Apply class name */}
        <label>
          Bike Owner:
          <input
            type="text"
            value={bikeOwner}
            onChange={(e) => setBikeOwner(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bike Renter:
          <input
            type="text"
            value={bikeRenter}
            onChange={(e) => setBikeRenter(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Days:
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button type="button" onClick={calculateTotal}>
          Calculate Total
        </button>
      </form>
      <div className="summary-container"> {/* Apply class name */}
        <h2>Summary</h2>
        <p>Bike Owner: {bikeOwner}</p>
        <p>Bike Renter: {bikeRenter}</p>
        <p>Total Amount: {total}</p>
      </div>
      <Connect />
    </div>
  );
}

export default App;
