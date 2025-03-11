import { useState } from "react";
import "../Component/profile.css"

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileName, setProfileName] = useState("Rushikesh Bavishkar");
  const [email, setEmail] = useState("baviskarrushikesh03@gmail.com");
  const [phone, setPhone] = useState("+91 7378727976");
  const [company, setCompany] = useState("Update soon...");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <p className="profile-subtitle">Manage your account settings and preferences</p>

      {/* Tabs Section */}
      <div className="tabs">
        <button className="upload-btn">Home</button>
        <button className="inactive-tab">Billings History</button>
        <button className="inactive-tab">FAQ</button>
      </div>

      <div className="profile-content">
        {/* Profile Picture Section */}
        <div className="profile-section">
        <div className="profile-picture" onClick={() => document.getElementById("fileInput").click()} style={{ cursor: "pointer" }}>
  {profileImage ? (
    <img src={profileImage} alt="Profile" className="profile-img" />
  ) : (
    <div className="placeholder">
      Click To Upload Image
    </div>
  )}
  <input 
    type="file" 
    id="fileInput" 
    style={{ display: "none" }} 
    onChange={handleImageUpload} 
    accept="image/*" 
    required 
  />
</div>

          <p>Profile Picture</p>
          <label className="upload-btn">
            Change picture
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </label>
          <button className="delete-btn" onClick={handleDeleteImage}>
            Delete picture
          </button>
        </div>

        {/* Profile Information Form */}
        <div className="profile-info">
          <label>Profile name</label>
          <input type="text" value={profileName} readOnly />

          <label>Email</label>
          <input type="email" value={email} readOnly className="bold-text" />

          <label>Phone Number</label>
          <input type="tel" value={phone} readOnly className="bold-text" />

          <label>Company Name</label>
          <input type="text" value={company} readOnly />

          <button className="edit-profile-btn">EDIT PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
