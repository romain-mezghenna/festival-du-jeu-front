import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home-benevole.css'

const HomeBenevole = (props) => {
  return (
    <div className="home-benevole-container">
      <Helmet>
        <title>HomeBenevole - Funny Key Herring</title>
        <meta property="og:title" content="HomeBenevole - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name17"></Navbar>
      <div className="home-benevole-features">
        <h1 className="home-benevole-text">
          <span className="home-benevole-text01">Accueil bénévole</span>
          <br></br>
        </h1>
        <div className="home-benevole-container1">
          <Link to="/inscription-gnrale">
            <div className="home-benevole-feature-card">
              <h2 className="home-benevole-text03">
                <span className="home-benevole-text04">Inscription</span>
                <br></br>
                <br></br>
              </h2>
              <svg viewBox="0 0 1024 1024" className="home-benevole-icon">
                <path d="M320 384h128v128h-128zM512 384h128v128h-128zM704 384h128v128h-128zM128 768h128v128h-128zM320 768h128v128h-128zM512 768h128v128h-128zM320 576h128v128h-128zM512 576h128v128h-128zM704 576h128v128h-128zM128 576h128v128h-128zM832 0v64h-128v-64h-448v64h-128v-64h-128v1024h960v-1024h-128zM896 960h-832v-704h832v704z"></path>
              </svg>
            </div>
          </Link>
          <div className="home-benevole-feature-card1">
            <h2 className="home-benevole-text07">
              <span className="home-benevole-text08">
                Validation du planning
              </span>
              <br className="home-benevole-text09"></br>
              <br></br>
            </h2>
            <svg viewBox="0 0 1024 1024" className="home-benevole-icon02">
              <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
            </svg>
          </div>
          <Link to="/planning-individuel">
            <div className="home-benevole-feature-card2">
              <h2 className="home-benevole-text11">
                <span className="home-benevole-text12">
                  Planning individuel
                </span>
                <br className="home-benevole-text13"></br>
                <br></br>
              </h2>
              <svg
                viewBox="0 0 731.4285714285713 1024"
                className="home-benevole-icon04"
              >
                <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/news">
            <div className="home-benevole-feature-card3">
              <h2 className="home-benevole-text15">
                <span className="home-benevole-text16">News</span>
                <br className="home-benevole-text17"></br>
                <br></br>
              </h2>
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-benevole-icon06"
              >
                <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/hbergement">
            <div className="home-benevole-feature-card4">
              <h2 className="home-benevole-text19">
                <span>Hébergement</span>
                <br></br>
              </h2>
              <svg viewBox="0 0 1024 1024" className="home-benevole-icon08">
                <path d="M426 128h556v768h-256v-170h84v-86h-84v-86h84v-84h-84v-78l-86-58v-36h-54q-68-44-160-106v-64zM348 244l292 194v458h-214v-342h-170v342h-214v-448z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name17"></Footer>
    </div>
  )
}

export default HomeBenevole
