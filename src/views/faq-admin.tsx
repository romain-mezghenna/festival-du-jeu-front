import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQAdminComponent from '../components/faq-admin-component'
import Footer from '../components/footer'
import './faq-admin.css'

const FAQAdmin = (props:any) => {
  return (
    <div className="faq-admin-container">
      <Helmet>
        <title>FAQAdmin - Funny Key Herring</title>
        <meta property="og:title" content="FAQAdmin - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name13"></Navbar>
      <FAQAdminComponent rootClassName="faq-admin-component-root-class-name"></FAQAdminComponent>
      <Footer rootClassName="footer-root-class-name13"></Footer>
    </div>
  )
}

export default FAQAdmin
