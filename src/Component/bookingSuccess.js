import React from "react";
import "../Component/bookingSuccess.css";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  
  const navigate = useNavigate();

  function handleHome() {
    navigate('/bookingdb');
  }

  function handleShare() {
    const shareData = {
      title: "Slot Booking Successful",
      text: "Your slot booking was successful! 🎉\nTransaction Number: XXXXXXXX\nDate: 26 Jan, 2025\nTime: 09:00 PM - 10:00 PM\nLocation: XYZ - Mumbai\nAmount Paid: ₹XXX.XX",
      url: window.location.href, // Share current page URL
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing not supported in this browser.");
    }
  }

  return (
    <div className="success-container">
      <div className="success-box">
        {/* Left Section - Success Message */}
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Slot Booking Successful</h2>
          <p>Transaction Number : XXXXXXXX</p>
          <button className="btn" onClick={handleShare}> Share</button>
          <button className="btn" onClick={handleHome}>Go To Home Page</button>
        </div>

        {/* Right Section - Booking Details */}
        <div className="summary-box-payment">
          <div className="summary-card">
            <h3>1 Ad Slot</h3>
            <p>Sun, 26 Jan, 2025</p>
            <p>09:00 PM - 10:00 PM</p>
            <p><strong>App Name:</strong> XYZ - Mumbai</p>
            </div>
            <hr />
            <p className="price">₹ XXX.XX</p>
            <p className="booking-fee">Booking Fee ▼</p>
            <p className="price">₹ XXX.XX</p>
            <hr />
            <p className="paid-text">Paid</p>
         
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
