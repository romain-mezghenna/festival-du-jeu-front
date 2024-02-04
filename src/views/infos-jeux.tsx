import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import InfosJeuxComponent from '../components/infos-jeux-component'
import ImportCsv from '../components/import-csv'
import Footer from '../components/footer'
import './infos-jeux.css'

const InfosJeux = (props:any) => {
  return (
    <div className="infos-jeux-container">
      <Helmet>
        <title>InfosJeux - Funny Key Herring</title>
        <meta property="og:title" content="InfosJeux - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name14"></Navbar>
      <InfosJeuxComponent rootClassName="infos-jeux-component-root-class-name"></InfosJeuxComponent>
      <ImportCsv rootClassName="import-csv-root-class-name"></ImportCsv>
      <Footer rootClassName="footer-root-class-name14"></Footer>
    </div>
  )
}

export default InfosJeux
