import React from 'react'

import PropTypes from 'prop-types'

import './news-post-card.css'

function NewsPostCard (props : any) {
  return (
    <div className={`news-post-card-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="news-post-card-image"
      />
      <div className="news-post-card-container">
        <span className="news-post-card-text">{props.title}</span>
        <span className="news-post-card-text1">{props.description}</span>
      </div>
    </div>
    
  )
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

NewsPostCard.propTypes = {
  author: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  imageSrc: PropTypes.string,
  profileSrc: PropTypes.string,
  profileAlt: PropTypes.string,
  label: PropTypes.string,
}

export default NewsPostCard
