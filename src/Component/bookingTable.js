import React, { useState } from "react";
import "../Component/bookingTable.css";
import DataTable from "react-data-table-component";


const bookingsData = [
  { id: 545, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 546, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 547, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 548, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 549, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 550, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 551, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 552, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 553, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 554, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 555, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 556, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 545, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 546, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 547, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 548, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "11:00 pm", end: "12:00 am" },
  { id: 549, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 550, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 551, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 552, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "12:00 am", end: "01:00 pm" },
  { id: 553, slotId: 1, city: "Nashik", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 554, slotId: 1, city: "Pune", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 555, slotId: 1, city: "Mumbai", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },
  { id: 556, slotId: 1, city: "Nagpur", date: "26-Jan-2025", start: "01:00 pm", end: "02:00 pm" },

];

const BookingTable = () => {

  const [selectedCity, setSelectedCity] = useState("All");
  function handleClick(){

  }
  const columns = [
    {
        name: 'Booking ID',
        selector: row => row.id,
    },
    {
      name: 'Slot ID',
      selector: row => row.slotId,
  },
  {
    name: 'City Name',
    selector: row => row.city,
},{
  name: 'Slot Date',
  selector: row => row.date,
},{
  name: 'Start Time',
  selector: row => row.start,
},{
  name: 'End Time',
  selector: row => row.end,
},
    {
        name: 'Book',
        cell: row => (
            <button className="book-button" onClick={() => handleClick(row)}>
                Edit
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
            <div className="pagination">
              <button>Previous</button>
              <span>Page 1 of 2</span>
              <button>Next</button>
            </div>
          </div>


      </div>
    </div>
    </>
  );
};

export default BookingTable;
