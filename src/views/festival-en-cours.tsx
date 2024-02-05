import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './festival-en-cours.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const FestivalEnCours = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="festival-en-cours-container">
      <Helmet>
        <title>FestivalEnCours - Funny Key Herring</title>
        <meta
          property="og:title"
          content="FestivalEnCours - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name19"></Navbar>
      <div className="festival-en-cours-features">
        <h1 className="festival-en-cours-text">Festival en cours</h1>
        <div className="festival-en-cours-container1">
          <Link to="/edition-festival">
            <div className="festival-en-cours-feature-card">
              <h2 className="festival-en-cours-text1">
                Modification des modalités du festival
              </h2>
              <svg viewBox="0 0 1024 1024" className="festival-en-cours-icon">
                <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
              </svg>
            </div>
          </Link>
          <div className="festival-en-cours-feature-card2">
            <h2 className="festival-en-cours-text3">
              Attribution de postes aux bénévoles
            </h2>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="festival-en-cours-icon4"
            >
              <path d="M877.714 146.286c40 0 73.143 33.143 73.143 73.143v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143zM658.286 91.429v164.571c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-164.571c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286zM219.429 91.429v164.571c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-164.571c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286zM877.714 950.857v-585.143h-804.571v585.143h804.571zM512 621.714h128c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-128v128c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-128h-128c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h128v-128c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286v128z"></path>
            </svg>
          </div>
          <div className="festival-en-cours-feature-card3">
            <h2 className="festival-en-cours-text4">
              <span>Gestion des zones</span>
              <br></br>
              <br></br>
            </h2>
            <svg viewBox="0 0 1024 1024" className="festival-en-cours-icon6">
              <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
            </svg>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name19"></Footer>
    </div>
  )
}

export default FestivalEnCours
