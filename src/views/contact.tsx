import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactComponent from '../components/contact-component'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props:any) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Funny Key Herring</title>
        <meta property="og:title" content="Contact - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name10"></Navbar>
      <ContactComponent rootClassName="contact-component-root-class-name"></ContactComponent>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default Contact
