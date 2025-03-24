import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css"; // Ensure this CSS file contains required styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeIcon from '@mui/icons-material/Home';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DehazeIcon from '@mui/icons-material/Dehaze';

const BookingPage = () => {
  const location=useLocation();
  const [image, setImage] = useState(null);
  const rowData=location?.state.data;
  const token=location?.state.token;
  console.log("rowdata:",rowData,"token:",token);
  const navigate = useNavigate();
  const [uploadImageData,setUploadImageData]=useState({image: "string",bookingId:rowData?.ad_slot_booking_id,payment_status: "string",booking_status: "string",booking_amount:rowData?.booking_amount,access_token:token})


  // {
  //   "image": "string",
  //   "bookingId": 0,
  //   "payment_status": "string",
  //   "booking_status": "string",
  //   "booking_amount": 0,
  //   "access_token": "string"
  // }

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUploadImageData({...uploadImageData,image:imageUrl})
    }
  };

  // Navigate to Image Summary Page
  const handleImageSelection = () => {
    console.log("image data:",uploadImageData);
    
    if (image) {
      navigate("/imagesummary", { state: { image:image,rowData:rowData,token:token } });
    }
  };

  return (
    <div className="container">
      {/* Main Content */}
      <main className="main-content">
        {/* Booking Details Section */}
        <section className="booking-box">
          <h2>Booking Details</h2>
          <hr />
          <div className="details">
            <p><strong>Booking Status:</strong> {""} </p>
            <p><strong>City Name:</strong>{rowData.city_name}</p>
            <p><strong>Slot Date:</strong>{rowData.slot_date}</p>
            <p><strong>Time:</strong>{rowData.start_time}</p>
            <p><strong>Slot Rate:</strong>{rowData.booking_amount}</p>
          </div>

         {/* Image Upload Box */}
<div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
  {image ? (
    <img src={image} alt="Uploaded Preview" />
  ) : (
    <span>Click To Upload Image</span>
  )}
  <input
    type="file"
    id="fileInput"
    onChange={handleImageUpload}
    accept="image/*"
    hidden
  />
</div>

          <button className="button" onClick={handleImageSelection}>Use This Image</button>
        </section>

        {/* Space b/w container's */}
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </p>
        {/* Mobile Preview Section */}
        <div className="mobile-view">
          <div className="mobile-header-new">
            <div className="location">
              📍 <span>NASHIK</span>
              <p>John Doe</p>
            </div>
            <div className="profile-icon">😊</div>
          </div>
           <div className="mobile-card">
              <h4>XYZ</h4>
              <p>XYZ</p>
              <p>XYZ</p>
              <p>XYZ</p>
            </div>
          <div className="mobile-content">
            <div className="mobile-card-image">
            
              <img src={image} alt="preview"/>
            
            </div>
          </div>

          <div className="mobile-nav-new">
            <ArrowBackIosIcon fontSize="medium"/>
            <HomeIcon fontSize="large"/>
            <DehazeIcon fontSize="medium"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
