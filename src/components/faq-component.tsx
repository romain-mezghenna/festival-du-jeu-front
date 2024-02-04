import React from 'react'

import PropTypes from 'prop-types'

import './faq-component.css'

function FAQComponent  (props : any)  {
  return (
    <div className={`faq-component-container ${props.rootClassName} `}>
      <div className="faq-component-container1">
        <span className="faq-component-text">{props.text}</span>
        <select className="faq-component-select">
          <option value="Option 1" className="">
            Option 1
          </option>
          <option value="Option 2" className="">
            Option 2
          </option>
          <option value="Option 3" className="">
            Option 3
          </option>
        </select>
        <span className="faq-component-text1">{props.text1}</span>
        <span className="faq-component-text2">{props.text2}</span>
      </div>
    </div>
  )
}

FAQComponent.defaultProps = {
  text1: 'Réponses',
  rootClassName: '',
  text2: 'Loremispum',
  text: 'Questions fréquemment posées',
}

FAQComponent.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default FAQComponent
