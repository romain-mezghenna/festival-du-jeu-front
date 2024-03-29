import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavBarAnimationJeux from '../components/nav-bar-animation-jeux'
import InfosAnimJeux from '../components/infos-anim-jeux'
import Footer from '../components/footer'
import './menu-animation-jeux.css'

const MenuAnimationJeux = (props:any) => {
  return (
    <div className="menu-animation-jeux-container">
      <Helmet>
        <title>MenuAnimationJeux</title>
        <meta
          property="og:title"
          content="MenuAnimationJeux"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <InfosAnimJeux rootClassName="infos-anim-jeux-root-class-name"></InfosAnimJeux>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default MenuAnimationJeux
