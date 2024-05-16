// import React from 'react'
import "./ReservationForm.css"
const ReservationForm = () => {
  return (
    <div className="reservation">
      <form id="contactForm">
        <h2 className="contact-us">Reservation</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
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
        <div className="form-group">
          <label htmlFor="date">Datum:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" />
        </div>
        <button type="submit">senden</button>
      </form>
    </div>
  );
}

export default ReservationForm