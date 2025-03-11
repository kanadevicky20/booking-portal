import React from "react";
import "../Component/login.css"; // Ensure this CSS file is properly styled



const CardDetails = () => {
  return (
    <>
    <div className="container">
      {/* Main Content */}
      <div className="main-content">
        {/* Card Details Form */}
        <div className="card-details-box">
          <h2>Card Details</h2>
          <hr />
          
          <label>Credit / Debit Card Number</label>
          <div className="card-input">
            <input type="text" placeholder="XXXX XXXX XXXX XXX" maxLength="19" />
            {/* <img src="/assets/mastercard.png" alt="Card Icon" className="card-icon" /> */}
          </div>

          <label>Name</label>
          <input type="text" placeholder="XXXXXX XXXXX" />

          <div className="card-row">
            <div>
              <label>Exp Date</label>
              <input type="text" placeholder="XX/XX/XXXX" />
            </div>
            <div>
              <label>CVV</label>
              <input type="password" placeholder="XXXX" maxLength="4" />
            </div>
          </div>

          <button className="pay-button">Pay</button>
        </div>

        {/* Summary Section */}
        <div className="summary-box">
          <h3>1 Ad Slot</h3>
          <p><strong>Sun, 26 Jan, 2025</strong></p>
          <p>09:00 PM - 10:00 PM</p>
          <p>App Name <br /> XYZ - Mumbai</p>
          <hr />
          <p><strong>Sub-total:</strong> ₹ XXX.XX</p>
          <p><strong>Booking Fee:</strong> ₹ XXX.XX</p>
          <p><strong>Total Amount:</strong> ₹ XXX.XX</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardDetails;
