import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import EditionFestivalComponent from '../components/edition-festival-component'
import Footer from '../components/footer'
import './edition-festival.css'

const EditionFestival = (props) => {
  return (
    <div className="edition-festival-container">
      <Helmet>
        <title>EditionFestival - Funny Key Herring</title>
        <meta
          property="og:title"
          content="EditionFestival - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name21"></Navbar>
      <EditionFestivalComponent rootClassName="edition-festival-component-root-class-name"></EditionFestivalComponent>
      <Footer rootClassName="footer-root-class-name21"></Footer>
    </div>
  )
}

export default EditionFestival
