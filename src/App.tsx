import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RootState, store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./style.css";
import FAQ from "./views/faq";
import Hbergement from "./views/hbergement";
import AttributionPostes from "./views/attribution-postes";
import MenuAnimationJeux from "./views/menu-animation-jeux";
import HomeBenevole from "./views/home-benevole";
import FestivalEnCours from "./views/festival-en-cours";
import Login from "./views/login";
import InfosJeux from "./views/infos-jeux";
import Register from "./views/register";
import PlanningIndividuel from "./views/planning-individuel";
import PlanningAnimationJeux from "./views/planning-animation-jeux";
import InfosPratiques from "./views/infos-pratiques";
import MenuInscription from "./views/menu-inscription";
import News from "./views/news";
import CrationFestival from "./views/cration-festival";
import EditionFestival from "./views/edition-festival";
import GestionZones from "./views/gestion-zones";
import Contact from "./views/contact";
import InscriptionGnrale from "./views/inscription-gnrale";
import HomeAdmin from "./views/home-admin";
import FAQAdmin from "./views/faq-admin";
import Home from "./views/home";
import Profil from "./views/profil";
import DetailJeu from "./views/detail-jeu";
import NotFound from "./views/not-found";
import ListeFestivales from "./views/liste-festivales";
import { sendRequest } from "./utils/sendRequest";
import { login, logout } from "./features/userSlice/userSlice";
import CreationCreneau from "./components/creation-creneau";

export default function App () {

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.token) {
      // Send a request to the server to check if the token is still valid
      sendRequest("me", "GET", null, user.token, (err, res) => {
        if (err) {
          // If the token is invalid, log the user out
          dispatch(logout());
          // Reloads the page to update the UI
          window.location.reload();
        } else {
          // If the token is valid, update the user's information

          dispatch(
            login({
              token: user.token ?? "",
              pseudo: res.pseudo,
              role: res.role,
            })
          );
          console.log(res);
        }
      });
    }
  }, []);


  

  return (
    <Router>
      <Routes>
        <Route Component={FAQ} path="/faq" />
        <Route Component={Hbergement} path="/hbergement" />
        <Route Component={AttributionPostes} path="/attribution-postes" />
        <Route Component={MenuAnimationJeux} path="/menu-animation-jeux" />
        <Route Component={HomeBenevole} path="/home-benevole" />
        <Route Component={FestivalEnCours} path="/festival-en-cours" />
        <Route Component={Login} path="/login" />
        <Route Component={InfosJeux} path="/infos-jeux" />
        <Route Component={Register} path="/register" />
        <Route Component={PlanningIndividuel} path="/planning-individuel" />
        <Route
          Component={PlanningAnimationJeux}
          path="/planning-animation-jeux"
        />
        <Route Component={InfosPratiques} path="/infos-pratiques" />
        <Route Component={MenuInscription} path="/menu-inscription" />
        <Route Component={News} path="/news" />
        <Route Component={CrationFestival} path="/cration-festival" />
        <Route Component={EditionFestival} path="/edition-festival" />
        <Route Component={GestionZones} path="/gestion-zones" />
        <Route Component={Contact} path="/contact" />
        <Route Component={InscriptionGnrale} path="/inscription-gnrale" />
        <Route Component={HomeAdmin} path="/home-admin" />
        <Route Component={FAQAdmin} path="/faq-admin" />
        <Route Component={Home} path="/" />
        <Route Component={ListeFestivales} path="/liste-festivales" />
        <Route Component={Profil} path="/profil" />
        <Route Component={DetailJeu} path="/detail-jeu" />
        <Route Component={NotFound} path="**" />
        <Route Component={PlanningAnimationJeux} path="/creation-creneaux" />
      </Routes>
    </Router>
  );
};
