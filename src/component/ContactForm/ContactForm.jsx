/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import "./ContactForm.css";
import CardInfo from "../CardInfo/CardInfo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [companyData, setCompanyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const server = "https://admin.lightsoft.ch/";

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${server}api/Company/GetCompanyData`);
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        // console.error("Failed to fetch products:", error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(
        "https://admin.lightsoft.ch/api/Contact/Contact",
        formData
      );
       toast.success("check your email");
      setSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      toast.error("email is false",error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact">
      <h1 className="highlight">Kontakt</h1>
      <div className="container">
        <div className="contact-info">
          <CardInfo
            tel={companyData?.data?.phone2}
            pho={companyData?.data?.phone1}
            address={companyData?.data?.city + companyData?.data?.street}
            email={companyData?.data?.email}
            whatsapp={companyData?.data?.phone1}
          />
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="highlight">Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
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
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;
