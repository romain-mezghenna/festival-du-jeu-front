import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQComponent from '../components/faq-component'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props:any) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ</title>
        <meta property="og:title" content="FAQ" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name12"></Navbar>
      <div className="faq-container1">
        <FAQComponent rootClassName="faq-component-root-class-name"></FAQComponent>
      </div>
      <Footer rootClassName="footer-root-class-name12"></Footer>
    </div>
  )
}

export default FAQ
