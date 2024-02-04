import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import RegisterField from '../components/register-field'
import Footer from '../components/footer'
import './register.css'

function Register(props : any){
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Funny Key Herring</title>
        <meta property="og:title" content="Register - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <RegisterField rootClassName="register-field-root-class-name"></RegisterField>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Register
