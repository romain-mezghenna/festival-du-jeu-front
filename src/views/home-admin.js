import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home-admin.css'

const HomeAdmin = (props) => {
  return (
    <div className="home-admin-container">
      <Helmet>
        <title>HomeAdmin - Funny Key Herring</title>
        <meta property="og:title" content="HomeAdmin - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name18"></Navbar>
      <div className="home-admin-features">
        <h1 className="home-admin-text">Dashboard gestion de festival</h1>
        <div className="home-admin-container1">
          <Link to="/festival-en-cours">
            <div className="home-admin-feature-card">
              <h2 className="home-admin-text1">Festival en cours</h2>
              <svg viewBox="0 0 1024 1024" className="home-admin-icon">
                <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/cration-festival">
            <div className="home-admin-feature-card1">
              <h2 className="home-admin-text2">Création d&apos;un festival</h2>
              <svg viewBox="0 0 1024 1024" className="home-admin-icon2">
                <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name18"></Footer>
    </div>
  )
}

export default HomeAdmin
