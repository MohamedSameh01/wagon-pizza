/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./ReservationForm.css";
import { format } from "date-fns";

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const formatSelectedDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    if(day&&month&&year){
      return `${day}-${month}-${year}`;
    }
  };
  return (
    <div className="reservation">
      <h1>
        {" "}
        <span className="highlight">Reserve</span> Your Table any time and for
        any occeasion
      </h1>
      <form id="contactForm">
        <h2 className="contact-us">Reservation</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        {/* {selectedDate && (
          <p>Selected Date: {formatSelectedDate(selectedDate)}</p>
        )} */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Anzaani Personen:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="form-group ">
          <label htmlFor="date">Datum:</label>
          <div className="dateContainer">
            <input
              type="text"
              placeholder="DD-MM-YYYY"
              disabled
              value={formatSelectedDate(selectedDate)?formatSelectedDate(selectedDate):"DD-MM-YYYY"}
            />
            <input
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" />
        </div>
        <button type="submit">senden</button>
      </form>
    </div>
  );
};

export default ReservationForm;
