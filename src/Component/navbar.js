import React from 'react'
import '../Component/login.css';
import { useNavigate , Link , useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();
  const Navigate=useNavigate();

  let isLogin=sessionStorage.getItem("islogin");

  function handleLogout(){
    sessionStorage.setItem('islogin','false');
    Navigate('/login');
  }
  function handleSetting(){
    Navigate('/setting');
  }
  function handleBooking(){
    Navigate('/booking');
  }
  
  return (
    <div>
      {/* Header Section */}
      <header className="header">
      <h1>Logo</h1>
      <nav className="header-nav">
        <a
          hidden={isLogin === "false"}
          onClick={handleBooking}
          style={location.pathname === "/booking" ? { color: "white", fontWeight: "bold" } : {}}
        >
          BOOKING
        </a>
        <a
          hidden={isLogin === "false"}
          onClick={handleSetting}
          style={location.pathname === "/setting" ? { color: "white", fontWeight: "bold" } : {}}
        >
          SETTING
        </a>
        <a
  hidden={isLogin === "false"}
  onClick={handleLogout}
  style={{
    color: location.pathname === "/logout" ? "red" : "gray",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => (e.target.style.color = "red")}
  onMouseLeave={(e) =>
    (e.target.style.color = location.pathname === "/logout" ? "red" : "gray")
  }
>
  LOGOUT
</a>


        {/* <a
          style={{ color: "gray", fontWeight: "bold", cursor: "pointer" }}
          hidden={isLogin === "false"}
          onClick={handleLogout}
        >
          LOGOUT
        </a> */}
      </nav>
    </header>

    </div>
  )
}

export default Navbar
