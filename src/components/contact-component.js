import React from 'react'

import PropTypes from 'prop-types'

import './contact-component.css'

const ContactComponent = (props) => {
  return (
    <div className={`contact-component-container ${props.rootClassName} `}>
      <h1 className="contact-component-text">{props.heading}</h1>
      <span className="contact-component-text01">
        <span className="contact-component-text02">Par mail : </span>
        <br className="contact-component-text03"></br>
        <span className="contact-component-text04">
          contact@festivaldujeu-montpellier.org
        </span>
        <br className="contact-component-text05"></br>
        <span className="contact-component-text06">Via Facebook : </span>
        <br className="contact-component-text07"></br>
        <span className="contact-component-text08">
          https://www.facebook.com/festivaldujeudemontpellier/
        </span>
        <br className=""></br>
      </span>
    </div>
  )
}

ContactComponent.defaultProps = {
  rootClassName: '',
  heading: 'Une question ? Une proposition ? Prenez contact !',
}

ContactComponent.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default ContactComponent
