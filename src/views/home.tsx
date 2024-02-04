import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import { login,logout } from '../features/userSlice/userSlice'
import { sendRequest } from '../utils/sendRequest'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Footer from '../components/footer'
import './home.css'

const Home = (props:any) => {

  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch();

  if (user.token) {
    // Send a request to the server to check if the token is still valid
    sendRequest('me', 'GET',null, user.token,(err,res) => {
      if (err) {
        // If the token is invalid, log the user out
        dispatch(logout())
        // Reloads the page to update the UI
        window.location.reload();
      } else {
        // If the token is valid, update the user's information
        dispatch(login({token: user.token ?? "", pseudo: res.pseudo,role:res.role}))
        console.log(res)
      }
    });
  }
  return (
    <div className="home-container">
      <Helmet>
        <title>Funny Key Herring</title>
        <meta property="og:title" content="Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-hero">
        <h1 className="home-text">
          <span className="home-text01">Festival du jeu de Montpellier</span>
          <br className="home-text02"></br>
          <span className="home-text03">Outil Gestion de bénévoles</span>
          <br></br>
        </h1>
        <span className="home-text05">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-btn-group">
          <Link to="/register" className="home-navlink button">
            S&apos;inscrire
          </Link>
          <Link to="/login" className="home-navlink1 button">
            Se Connecter
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
