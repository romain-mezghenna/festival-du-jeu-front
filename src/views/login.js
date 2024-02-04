import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Loginfield from '../components/loginfield'
import Footer from '../components/footer'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Funny Key Herring</title>
        <meta property="og:title" content="Login - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <Loginfield rootClassName="loginfield-root-class-name"></Loginfield>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Login
