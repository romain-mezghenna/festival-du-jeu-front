import React from 'react'

import PropTypes from 'prop-types'

import NewsPostCard from './news-post-card'
import './news-section.css'

function NewsSection (props : any) {
  return (
    <div className={`news-section-container ${props.rootClassName} `}>
      <div className="news-section-blog">
        <div className="news-section-container1">
          <NewsPostCard
            rootClassName="rootClassName3"
          ></NewsPostCard>
        </div>
        <div className="news-section-container2">
          <NewsPostCard
            imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></NewsPostCard>
        </div>
        <div className="news-section-container3">
          <NewsPostCard
            imageSrc="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
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

export default NewsSection
