/* eslint-disable react/prop-types */
// import React from 'react'
import "./CardInfo.css"
const CardInfo = ({ tel, address, email, whatsapp, pho }) => {
  return (
    <div className="card-info">
    
      <div className="card-item">
        <h2>Telephone1</h2>
        <p>{pho}</p>
      </div>
      <div className="card-item">
        <h2>Telephone2</h2>
        <p>{tel}</p>
      </div>
      <div className="card-item">
        <h2>Address</h2>
        <p>{address}</p>
      </div>
      <div className="card-item">
        <h2>Email</h2>
        <p>{email}</p>
      </div>
      <div className="card-item">
        <h2>WhatsApp</h2>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message Us
        </a>
      </div>
    </div>
  );
};

export default CardInfo