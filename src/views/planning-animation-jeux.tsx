import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavBarAnimationJeux from '../components/nav-bar-animation-jeux'
import AnimationJeux from '../components/animation-jeux'
import Footer from '../components/footer'
import './planning-animation-jeux.css'

const PlanningAnimationJeux = (props:any) => {
  return (
    <div className="planning-animation-jeux-container">
      <Helmet>
        <title>PlanningAnimationJeux - Funny Key Herring</title>
        <meta
          property="og:title"
          content="PlanningAnimationJeux - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <NavBarAnimationJeux rootClassName="nav-bar-animation-jeux-root-class-name1"></NavBarAnimationJeux>
      <AnimationJeux rootClassName="animation-jeux-root-class-name"></AnimationJeux>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default PlanningAnimationJeux
