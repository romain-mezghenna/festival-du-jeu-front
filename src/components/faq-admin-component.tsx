import React from 'react'

import PropTypes from 'prop-types'

import FAQComponent from './faq-component'
import './faq-admin-component.css'

function FAQAdminComponent (props : any)  {
  return (
    <div className={`faq-admin-component-container ${props.rootClassName} `}>
      <div className="faq-admin-component-container1">
        <h1 className="faq-admin-component-text">{props.heading}</h1>
      </div>
      <div className="faq-admin-component-container2">
        <h1 className="faq-admin-component-text1">{props.heading1}</h1>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="input"
        />
        <button type="button" className="faq-admin-component-button button">
          {props.button}
        </button>
      </div>
      <div className="faq-admin-component-container3">
        <h1 className="faq-admin-component-text2">{props.heading2}</h1>
        <span className="faq-admin-component-text3">{props.text}</span>
        <select className="">
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
        <span className="faq-admin-component-text4">{props.text1}</span>
        <textarea
          placeholder={props.textareaPlaceholder}
          className="textarea"
        ></textarea>
        <button type="button" className="faq-admin-component-button1 button">
          {props.button1}
        </button>
      </div>
      <div className="faq-admin-component-container4">
        <h1 className="faq-admin-component-text5">{props.heading3}</h1>
        <FAQComponent
          rootClassName="faq-component-root-class-name1"
        ></FAQComponent>
      </div>
    </div>
  )
}

FAQAdminComponent.defaultProps = {
  textinputPlaceholder: 'placeholder',
  textareaPlaceholder: 'placeholder',
  heading1: 'Ajouter une question',
  rootClassName: '',
  text: 'Question :',
  heading2: 'Ajouter une réponse',
  button: 'Ajouter',
  heading3: 'FAQ',
  button1: 'Ajouter',
  heading: "Menu d'édition de la FAQ",
  text1: 'Réponse',
}

FAQAdminComponent.propTypes = {
  textinputPlaceholder: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading2: PropTypes.string,
  button: PropTypes.string,
  heading3: PropTypes.string,
  button1: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
}

export default FAQAdminComponent
