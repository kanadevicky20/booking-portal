import "../Component/login.css"; // Assuming you have this CSS file
import { useLocation, useNavigate } from "react-router-dom";

const ImageUploadSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/paymethod");
  }

  return (
    <div className="container">
      
         {/* Main Content Section */}
      <div className="main-content">
        {/* Left Side (Image & Ticket Info) */}
        <div className="left-section">
          {/* Image Upload Box */}
          <div
            className="image-upload-box"
            style={{
              backgroundImage: location.state?.image
                ? `url(${location.state?.image})`
                : "none",
            }}
          >
            <p className="image-placeholder">-</p>
          </div>

          {/* M-Ticket Section */}
          <div className="ticket-box">
            <h3>M-Ticket</h3>
            <div className="ticket-info">
              <strong>M-Ticket Information</strong>
              <ul>
                <li>
                  Customers can access their tickets from 'My Profile' in the
                  app/mobile web.
                </li>
                <li>
                  It is mandatory to present the ticket(s) in the profile
                  section at the venue.
                </li>
                <li>No physical tickets are required to enter the venue.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side (Summary Box) */}
        <div className="summary-box">
          <div className="summary-card">
            <h3>
              1 Ad Slot <span>₹ XXX.XX</span>
            </h3>
            <p>
              <strong>Sun, 26 Jan, 2025</strong>
            </p>
            <p>09:00 PM - 10:00 PM</p>
            <p>
              <strong>App Name</strong>
            </p>
            <p>XYZ - Mumbai</p>
          </div>

          <hr />

          <div className="summary-card">
          <div className="summary-details">
            <p>
              Sub-total <span>₹ XXX.XX</span>
            </p>
            <p>
              Booking Fee <span>₹ XXX.XX</span>
            </p>
            <p>_______________________________</p>
            <p className="total-amount">
              Total Amount <span>₹ XXX.XX</span>
            </p>
          </div>
          </div>

            <button className="button-preview" onClick={handlePayment}>
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSummary;
