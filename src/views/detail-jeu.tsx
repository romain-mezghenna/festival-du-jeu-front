import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import DetailJeuComponent from '../components/detail-jeu-component'
import Footer from '../components/footer'
import './detail-jeu.css'

const DetailJeu = (props:any) => {
  return (
    <div className="detail-jeu-container">
      <Helmet>
        <title>DetailJeu - Funny Key Herring</title>
        <meta property="og:title" content="DetailJeu - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name20"></Navbar>
      <DetailJeuComponent rootClassName="detail-jeu-component-root-class-name"></DetailJeuComponent>
      <Footer rootClassName="footer-root-class-name20"></Footer>
    </div>
  )
}

export default DetailJeu
