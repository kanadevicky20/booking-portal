import React, { useState } from "react";
import "../Component/billingHistory.css";
import { useNavigate } from "react-router-dom";

const BillingHistory = () => {
  const Navigate = useNavigate();

  function handleHome() {
    Navigate('/bookingdb');
  }
  function handleProfile() {
    Navigate('/profile');
  }

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages (change as needed)

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="billing-container">
        <h1>Settings</h1>
      {/* Tabs Section */}
      <div className="billing-header">
        <nav className="billing-header-nav">
          <a onClick={handleHome}>HOME</a>
          <a onClick={handleProfile}>PROFILE</a>
          <a>FAQ</a>
          <a>HELP</a>
        </nav>
      </div>

      {/* Payment Method Section */}
      <h2 className="payment-title">Payment Method</h2>
      <p className="payment-subtitle">Update your billing details and address</p>

      {/* Card Details */}
      <div className="card-details">
        <h3>Card Details</h3>
        
      </div>
      <div className="card-inputs">
          <div>
            <label>Name on your card</label>
            <input type="text" placeholder="XXXXXXXX XXXXX" />
          </div>
          <div>
            <label>Expiry</label>
            <input type="text" placeholder="XX/XXXX" />
          </div>
          <div>
            <label>Card Number</label>
            <div className="card-number">
              <span className="card-logo">💳</span>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="XXXX" />
          </div>
        </div>

      {/* Contact Email */}
      <div className="contact-email">
        <h3>Contact email</h3>
        <p>Where should invoice be sent?</p>
        <div className="email-options">
          <input type="radio" name="email" checked readOnly />
          <span>Send to the existing email</span>
          <p className="email-text">[XXXXXXXXXXXX@gamil.com]</p>
          <button className="add-email">➕ Add another email address</button>
        </div>
       
      </div>

      {/* Billing History Table */}
      <div className="billing-history">
        <h3>Billing History</h3>

        {/* Filter Section */}
        <div className="filter-section">
        <p>See the transactions you made 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        </p>
          <label>FILTER BY</label>
          <select>
            <option>Date</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
          <input type="date" />
          <input type="date" />
        </div>

        <table>
          <thead>
            <tr>
              <th>INVOICE</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>BOOKING ID</th>
              <th>SLOT DATE</th>
              <th>SLOT TIME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jan 26, 2025</td>
              <td>10:00 AM</td>
              <td>53456327</td>
              <td>Jan 26, 2025</td>
              <td>09:00 AM - 10:00 AM</td>
              <td className="paid">PAID</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jan 20, 2025</td>
              <td>12:00 PM</td>
              <td>53456327</td>
              <td>Jan 20, 2025</td>
              <td>01:00 PM - 02:00 PM</td>
              <td className="paid">PAID</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jan 18, 2025</td>
              <td>09:30 AM</td>
              <td>53456327</td>
              <td>Jan 18, 2025</td>
              <td>05:00 PM - 06:00 PM</td>
              <td className="failed">FAILED</td>
            </tr>
          </tbody>
        </table>

        {/* Pagination Buttons at Bottom */}
        <div className="pagination-buttons">
          <p onClick={handlePrevious} disabled={currentPage === 1}>◀</p>
          <span> {currentPage} | {totalPages}</span>
          <p onClick={handleNext} disabled={currentPage === totalPages}>▶</p>
        </div>
        
      </div>
    </div>
  );
};

export default BillingHistory;
