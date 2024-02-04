import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NewsSection from '../components/news-section'
import Footer from '../components/footer'
import './news.css'

const News = (props) => {
  return (
    <div className="news-container">
      <Helmet>
        <title>News - Funny Key Herring</title>
        <meta property="og:title" content="News - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <NewsSection rootClassName="news-section-root-class-name"></NewsSection>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default News
