import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavBarAnimationJeux from '../components/nav-bar-animation-jeux'
import InfosAnimJeux from '../components/infos-anim-jeux'
import Footer from '../components/footer'
import './menu-animation-jeux.css'

const MenuAnimationJeux = (props) => {
  return (
    <div className="menu-animation-jeux-container">
      <Helmet>
        <title>MenuAnimationJeux - Funny Key Herring</title>
        <meta
          property="og:title"
          content="MenuAnimationJeux - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <NavBarAnimationJeux rootClassName="nav-bar-animation-jeux-root-class-name"></NavBarAnimationJeux>
      <InfosAnimJeux rootClassName="infos-anim-jeux-root-class-name"></InfosAnimJeux>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default MenuAnimationJeux
