import React from 'react'

import PropTypes from 'prop-types'

import NewsPostCard from './news-post-card'
import './news-section.css'

function NewsSection (props :any) {
  return (
    <div className={`news-section-container ${props.rootClassName} `}>
      <div className="news-section-blog">
        <div className="news-section-container1">
          <NewsPostCard
            title='Sortons jouer 2024 le grand rendez-vous du jeu !'
            description='Se déguiser en chevalier pour une bonne partie de Donjon et Dragons jusqu’à 4 heures du matin ou accuser votre adversaire d’avoir avancé son pion d’une case de trop au Monopoly c’est votre truc ? Alors le salon du jeu de Montpellier des 20 et 21 avril 2024 devrait vous plaire ! On vous en dit plus sur ce magnifique rendez-vous à ne pas manquer.'
            imageSrc="https://www.jds.fr/medias/image/festival-du-jeu-de-montpellier-170311-640-0.jpg"
            rootClassName="rootClassName3"
          ></NewsPostCard>
        </div>
        <div className="news-section-container2">
          <NewsPostCard
            title='Sortons jouer 2023 : un gigantesque succès !'
            description='Le festival Sortons Jouer 2023 a été un véritable succès. Les visiteurs ont pu profiter de nombreuses activités et animations. Retour sur cet événement qui a réuni des milliers de passionnés de jeux de société, de jeux de rôle et de jeux vidéo.'
            imageSrc="https://www.festivaldujeu-montpellier.org/wp-content/uploads/2023/02/Affiche-2023-1417x1006-1.jpg"
            rootClassName="rootClassName2"

          ></NewsPostCard>
        </div>
        <div className="news-section-container3">
          <NewsPostCard
            title = 'Le mot du maire de Montpellier'
            description='Ce nouveau rendez-vous, que l’on espère compter parmi les plus grands rendez-vous de notre territoire, est l occasion rêvée pour les joueurs et les familles de venir tester les jeux de société, autour de nombreux espaces et différentes ambiances : jeux en bois, jeux de société, jeux d’enquêtes…'
            imageSrc="https://www.montpellier.fr/uploads/Image/67/IMF_100/GAB_MPL/44300_051_michael-delafosse-photo-officielle.jpeg"
            rootClassName="rootClassName1"
          ></NewsPostCard>
        </div>
      </div>
    </div>
  )
}

NewsSection.defaultProps = {
  rootClassName: '',
}

NewsSection.propTypes = {
  rootClassName: PropTypes.string,
}
NewsPostCard.defaultProps = {
  author: 'Jon Doe',
  imageAlt: 'image',
  title1: 'Sortons jouer 2024 le grand rendez-vous du jeu !',
  title2:'Sortons jouer 2023 : un gigantesque succès !',
  rootClassName: '',
  description1:
    'Se déguiser en chevalier pour une bonne partie de Donjon et Dragons jusqu’à 4 heures du matin ou accuser votre adversaire d’avoir avancé son pion d’une case de trop au Monopoly c’est votre truc ? Alors le salon du jeu de Montpellier des 20 et 21 avril 2024 devrait vous plaire ! On vous en dit plus sur ce magnifique rendez-vous à ne pas manquer.',
    time: '5 min read',
  description2:
    'Le festival Sortons Jouer 2023 a été un véritable succès. Les visiteurs ont pu profiter de nombreuses activités et animations. Retour sur cet événement qui a réuni des milliers de passionnés de jeux de société, de jeux de rôle et de jeux vidéo.',
  imageSrc:
    'imageSrc="https://www.jds.fr/medias/image/festival-du-jeu-de-montpellier-170311-640-0.jpg',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  profileAlt: 'profile',
  label: 'ENTERPRISE',
}
export default NewsSection
