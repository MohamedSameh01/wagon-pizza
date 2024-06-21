// import React from 'react'

import ContactForm from "../../component/ContactForm/ContactForm"
import Delivery from "../../component/Delivery/Delivery";

const Kontakt = () => {

   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };

   scrollToTop();

  return (
    <div>
      <ContactForm />
      <Delivery />
    </div>
  );
}

export default Kontakt