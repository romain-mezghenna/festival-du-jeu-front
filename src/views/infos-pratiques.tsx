import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './infos-pratiques.css'

const InfosPratiques = (props:any) => {
  return (
    <div className="infos-pratiques-container">
      <Helmet>
        <title>InfosPratiques - Funny Key Herring</title>
        <meta
          property="og:title"
          content="InfosPratiques - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name9"></Navbar>
      <div className="infos-pratiques-container1">
        <h1 className="infos-pratiques-text">
          <span className="infos-pratiques-text1">Infos Pratiques</span>
          <br></br>
        </h1>
        <span className="infos-pratiques-text3">
          <span>
            Vous retrouverez les différentes informations concernant les accès
            et horaires ainsi que des informations sur le déroulement de
            l&apos;évènement à l&apos;adresse suivante : 
          </span>
          <br></br>
        </span>
        <a
          href="https://www.festivaldujeu-montpellier.org/infos-pratiques-2/"
          target="_blank"
          rel="noreferrer noopener"
          className="infos-pratiques-link"
        >
          https://www.festivaldujeu-montpellier.org/infos-pratiques-2/
        </a>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default InfosPratiques
