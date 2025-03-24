import React, { useEffect, useState } from "react";
import "../Component/bookingTable.css";
import DataTable from "react-data-table-component";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAdSlotBooking } from "../API Manager/bookingFunctions";
import { Token } from "@mui/icons-material";


const bookingsData = [
  { ad_slot_booking_id: 545, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:120 },
  { ad_slot_booking_id: 547, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:130 },
  { ad_slot_booking_id: 546, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:160 },
  { ad_slot_booking_id: 548, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:108 },
  { ad_slot_booking_id: 549, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:200 },
  { ad_slot_booking_id: 550, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1320 },
  { ad_slot_booking_id: 551, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1300 },
  { ad_slot_booking_id: 552, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1010 },
  { ad_slot_booking_id: 553, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1020 },
  { ad_slot_booking_id: 554, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1100 },
  { ad_slot_booking_id: 555, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:2100 },
  { ad_slot_booking_id: 556, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:3100 },
  { ad_slot_booking_id: 545, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:2100 },
  { ad_slot_booking_id: 546, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1030 },
  { ad_slot_booking_id: 547, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1300 },
  { ad_slot_booking_id: 548, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1040 },
  { ad_slot_booking_id: 549, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1600 },
  { ad_slot_booking_id: 550, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:500 },
  { ad_slot_booking_id: 551, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:600 },
  { ad_slot_booking_id: 552, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:700 },
  { ad_slot_booking_id: 553, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:800 },
  { ad_slot_booking_id: 554, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:900 },
  { ad_slot_booking_id: 555, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1000 },
  { ad_slot_booking_id: 556, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:100 },

];

const BookingTable = () => {

  const location = useLocation();
  
  const Navigate = useNavigate();
  const token = location.state?.token;
  console.log("access_token:",location.state?.token);
  const [selectedCity, setSelectedCity] = useState("All");
  const [adSlotBookingData,setAdSlotBookingData]=useState([]);
  const [bookingData,setBookingData]=useState([]);

  useEffect(()=>{
      const res=getAdSlotBooking(token);
      if(res){
          setBookingData(res.data);
      }
  },[])

  // {
  //   "ad_slot_booking_id": 0,
  //   "ad_slot_id": 0,
  //   "city_name": "string",
  //   "slot_date": "string",
  //   "start_time": "string",
  //   "end_time": "string",
  //   "booking_status": "string",
  //   "payment_status": "string",
  //   "booking_amount": 0
  // }
  
  
  const columns = [
    {
        name: 'Booking ID',
        selector: row => row.ad_slot_booking_id,
    },
    {
      name: 'Slot ID',
      selector: row => row.ad_slot_id,
  },
  {
    name: 'City Name',
    selector: row => row.city_name,
},{
  name: 'Slot Date',
  selector: row => row.slot_date,
},{
  name: 'Start Time',
  selector: row => row.start_time,
},{
  name: 'End Time',
  selector: row => row.end_time,
},
,{
  name: 'Booking Amount',
  selector: row => row.booking_amount,
},
    {
        name: 'Book',
        cell: row => (
            <button className="book-button" onClick={() => handleClick(row)}>
                Book
            </button>
        ),
    },
];
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#073C60", // Blue header background
      color: "white", // White text color
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center"

    }
  },
  table: {
    style: {
      width: "100%",  // Full width of the container
      minHeight: "500px",  // Minimum height of the table
    }
  },
};

function handleClick(row){
  console.log("location.state:",location.state);
  
  console.log("row data",row);
  console.log("token:",token);
  
  Navigate('/booking',{state:{data:row,token:token}});
 }

  const filteredBookings =
    selectedCity === "All"
      ? bookingsData
      : bookingsData.filter((booking) => booking.city === selectedCity);

  return (
    <>
     <div className="dashboard">
      <div className="content">
       
       <div className="booking-table">
       <DataTable
       columns={columns}
       data={bookingsData}
       fixedHeader={true}
       pagination={true}
       paginationPerPage={10}
       paginationRowsPerPageOptions={[10]}
       customStyles={customStyles}
       striped={true}
       />
       </div>

        <div className="sidebar-dashboard">
        <h2 className="filter-title">Filters</h2>
  
            <div className="filter-group">
              <label>City</label>
              <select onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="All">All Cities</option>
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Status</label>
              <select>
                <option value="All">All</option>
                <option value="Booked">Booked</option>
                <option value="Available">Available</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Slot ID</label>
              <select>
                <option value="1">1</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Date</label>
              <input type="date" />
            </div>

            {/* Pagination Moved Inside Filters */}
            {/* <div className="pagination">
              <button>Previous</button>
              <span>Page 1 of 2</span>
              <button>Next</button>
            </div> */}
          </div>


      </div>
    </div>
    </>
  );
};

export default BookingTable;
