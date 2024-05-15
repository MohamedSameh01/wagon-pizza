/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import "./ContactForm.css";
import CardInfo from "../CardInfo/CardInfo";
const ContactForm = () => {
  const [companyData, setCompanyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
  console.log(companyData.data)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Form data submitted: ", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact">
      <h1 className="highlight">Kontakt</h1>
      <div className="container">
        <div className="contact-info">
          <CardInfo
            tel={companyData?.data?.phone2}
            pho={companyData?.data?.phone}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
