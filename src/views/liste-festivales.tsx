import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import ListesFestivales from '../components/listes-festivales';
import Footer from '../components/footer';
import './liste-festivales.css';

const ListeFestivales = (props:any) => {
  return (
    <div className="liste-festivales-container">
      <Helmet>
        <title>Liste-festivales</title>
        <meta property="og:title" content="Liste-festivales - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name25" />
      <ListesFestivales rootClassName="listes-festivales-root-class-name" />
      <Footer rootClassName="footer-root-class-name25" />
    </div>
  );
};

export default ListeFestivales;