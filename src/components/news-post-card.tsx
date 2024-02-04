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
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  time: '5 min read',
  imageSrc:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
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
