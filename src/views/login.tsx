import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Loginfield from '../components/loginfield'
import Footer from '../components/footer'
import './login.css'

const Login = (props:any) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login</title>
        <meta property="og:title" content="Login" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <Loginfield rootClassName="loginfield-root-class-name"></Loginfield>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Login
