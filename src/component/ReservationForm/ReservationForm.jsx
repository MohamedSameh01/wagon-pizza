/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./ReservationForm.css";
import { format } from "date-fns";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    eamil: "",
    phone: "",
    date: "",
    time: "",
    address: "",
  });
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    handelChange(e);
  };
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post("link", formData);
      toast.success("check your email");
      setSent(true);
      setFormData({
        name: "",
        eamil: "",
        phone: "",
        date: "",
        time: "",
        address: "",
      });
    } catch (error) {
      toast.error("email is false", error);
    } finally {
      setSending(false);
    }
  };

  const formatSelectedDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    if (day && month && year) {
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
      <form id="contactForm" onSubmit={handleSubmit}>
        <h2 className="contact-us">Reservation</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handelChange}
          />
        </div>
        {/* {selectedDate && (
          <p>Selected Date: {formatSelectedDate(selectedDate)}</p>
        )} */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="eamil"
            required
            onChange={handelChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon:</label>
          <input type="tel" id="phone" name="phone" onChange={handelChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Anzaani Personen:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handelChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="date">Datum:</label>
          <div className="dateContainer">
            <input
              type="text"
              placeholder="DD-MM-YYYY"
              disabled
              value={
                formatSelectedDate(selectedDate)
                  ? formatSelectedDate(selectedDate)
                  : "DD-MM-YYYY"
              }
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
          <input type="time" id="time" name="time" onChange={handelChange} />
        </div>
        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <div>
            <p>Message sent successfully!</p>
          </div>
        )}
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ReservationForm;
