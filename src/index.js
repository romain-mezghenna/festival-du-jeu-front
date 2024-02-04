import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import FAQ from './views/faq'
import Hbergement from './views/hbergement'
import AttributionPostes from './views/attribution-postes'
import MenuAnimationJeux from './views/menu-animation-jeux'
import HomeBenevole from './views/home-benevole'
import FestivalEnCours from './views/festival-en-cours'
import Login from './views/login'
import InfosJeux from './views/infos-jeux'
import Register from './views/register'
import PlanningIndividuel from './views/planning-individuel'
import PlanningAnimationJeux from './views/planning-animation-jeux'
import InfosPratiques from './views/infos-pratiques'
import MenuInscription from './views/menu-inscription'
import News from './views/news'
import CrationFestival from './views/cration-festival'
import EditionFestival from './views/edition-festival'
import GestionZones from './views/gestion-zones'
import Contact from './views/contact'
import InscriptionGnrale from './views/inscription-gnrale'
import HomeAdmin from './views/home-admin'
import FAQAdmin from './views/faq-admin'
import Home from './views/home'
import Profil from './views/profil'
import DetailJeu from './views/detail-jeu'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FAQ} exact path="/faq" />
        <Route component={Hbergement} exact path="/hbergement" />
        <Route component={AttributionPostes} exact path="/attribution-postes" />
        <Route
          component={MenuAnimationJeux}
          exact
          path="/menu-animation-jeux"
        />
        <Route component={HomeBenevole} exact path="/home-benevole" />
        <Route component={FestivalEnCours} exact path="/festival-en-cours" />
        <Route component={Login} exact path="/login" />
        <Route component={InfosJeux} exact path="/infos-jeux" />
        <Route component={Register} exact path="/register" />
        <Route
          component={PlanningIndividuel}
          exact
          path="/planning-individuel"
        />
        <Route
          component={PlanningAnimationJeux}
          exact
          path="/planning-animation-jeux"
        />
        <Route component={InfosPratiques} exact path="/infos-pratiques" />
        <Route component={MenuInscription} exact path="/menu-inscription" />
        <Route component={News} exact path="/news" />
        <Route component={CrationFestival} exact path="/cration-festival" />
        <Route component={EditionFestival} exact path="/edition-festival" />
        <Route component={GestionZones} exact path="/gestion-zones" />
        <Route component={Contact} exact path="/contact" />
        <Route component={InscriptionGnrale} exact path="/inscription-gnrale" />
        <Route component={HomeAdmin} exact path="/home-admin" />
        <Route component={FAQAdmin} exact path="/faq-admin" />
        <Route component={Home} exact path="/" />
        <Route component={Profil} exact path="/profil" />
        <Route component={DetailJeu} exact path="/detail-jeu" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
