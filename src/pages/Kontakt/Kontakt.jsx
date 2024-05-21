// import React from 'react'

import ContactForm from "../../component/ContactForm/ContactForm"

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
      <ContactForm/>
    </div>
  )
}

export default Kontakt