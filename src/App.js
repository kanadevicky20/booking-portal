import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/navbar";  // Import your Navbar
import LoginOtp from "./Component/loginOtp";
import Login from "./Component/login";
import BookingPage from "./Component/bookingPage";
import ImageUploadSummary from "./Component/imageSummary";
import PaymentMethod from "./Component/paymentMethod";
import BookingTable from "./Component/bookingTable";
import SettingsPage from "./Component/settingPage";
import CardDetails from "./Component/cardDetail";
import Profile from "./Component/profile";
import BookingSuccess from "./Component/bookingSuccess";


function App() {
  return (
    <Router>
      <MainLayout/>
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "*"]; // Add all routes where Navbar should be hidden

  return (
    <>
      {/* ✅ Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="*" element={<LoginOtp />} />
        <Route path="/signup" element={<LoginOtp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/imagesummary" element={<ImageUploadSummary />} />
        <Route path="/paymethod" element={<PaymentMethod />} />
        <Route path="/bookingdb" element={<BookingTable />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/payment" element={<CardDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </>
  );
}


export default App;
