import React from 'react'

import PropTypes from 'prop-types'

import './planning-mobile.css'

const PlanningMobile = (props) => {
  return (
    <div className="planning-mobile-container">
      <span className="planning-mobile-text">{props.text}</span>
      <select className="planning-mobile-select">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div className="planning-mobile-container01">
        <div className="planning-mobile-container02">
          <div className="planning-mobile-container03">
            <label>{props.text2}</label>
          </div>
          <div className="planning-mobile-container04">
            <label className="planning-mobile-text2">{props.text25}</label>
          </div>
          <div className="planning-mobile-container05">
            <label className="planning-mobile-text3">{props.text24}</label>
          </div>
          <div className="planning-mobile-container06">
            <label>{props.text23}</label>
          </div>
          <div className="planning-mobile-container07">
            <label>{props.text22}</label>
          </div>
          <div className="planning-mobile-container08">
            <label className="planning-mobile-text6">{props.text21}</label>
          </div>
        </div>
        <div className="planning-mobile-container09">
          <div className="planning-mobile-container10">
            <img
              alt={props.imageAlt10}
              src={props.imageSrc10}
              className="planning-mobile-image"
            />
          </div>
          <div className="planning-mobile-container11">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="planning-mobile-image1"
            />
          </div>
          <div className="planning-mobile-container12">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="planning-mobile-image2"
            />
          </div>
          <div className="planning-mobile-container13">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="planning-mobile-image3"
            />
          </div>
          <div className="planning-mobile-container14">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="planning-mobile-image4"
            />
          </div>
          <div className="planning-mobile-container15">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="planning-mobile-image5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PlanningMobile.defaultProps = {
  imageSrc511: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt513: 'image',
  imageAlt411: 'image',
  imageAlt1: 'image',
  imageSrc211: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt213: 'image',
  imageSrc41: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc112: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt312: 'image',
  imageAlt412: 'image',
  imageSrc411: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  text2: 'Animation Jeux',
  imageAlt212: 'image',
  imageSrc312: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt63: 'image',
  imageSrc113: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc51: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt21: 'image',
  imageAlt113: 'image',
  imageAlt512: 'image',
  imageAlt11: 'image',
  imageSrc412: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc61: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc111: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  text22: 'Tombola',
  text24: 'Vente restauration',
  text21: 'Forum associations',
  imageSrc31: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  text322: '17 -20',
  text25: 'Accueil',
  imageSrc212: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc21: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc10:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc3:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt51: 'image',
  text3: '9 - 11',
  imageSrc313: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt112: 'image',
  imageAlt31: 'image',
  imageAlt3: 'image',
  imageAlt41: 'image',
  imageSrc413: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt6: 'image',
  text321: '14 - 17',
  imageAlt10: 'image',
  imageSrc5:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc2:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt111: 'image',
  imageSrc213: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc11: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc6: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  text: 'Choix du créneau',
  text23: 'Cuisine',
  imageAlt313: 'image',
  imageSrc512: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc62: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageSrc4:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc1:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt61: 'image',
  imageSrc311: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt211: 'image',
  imageAlt413: 'image',
  imageAlt4: 'image',
  imageAlt5: 'image',
  text32: '11 - 14',
  imageAlt511: 'image',
  imageAlt62: 'image',
  imageSrc513: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt311: 'image',
  imageSrc63: '49664cf2-b0c9-45af-890f-2c9631b4246c',
  imageAlt2: 'image',
  text323: '20 - 22',
}

PlanningMobile.propTypes = {
  imageSrc511: PropTypes.string,
  imageAlt513: PropTypes.string,
  imageAlt411: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc211: PropTypes.string,
  imageAlt213: PropTypes.string,
  imageSrc41: PropTypes.string,
  imageSrc112: PropTypes.string,
  imageAlt312: PropTypes.string,
  imageAlt412: PropTypes.string,
  imageSrc411: PropTypes.string,
  text2: PropTypes.string,
  imageAlt212: PropTypes.string,
  imageSrc312: PropTypes.string,
  imageAlt63: PropTypes.string,
  imageSrc113: PropTypes.string,
  imageSrc51: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageAlt113: PropTypes.string,
  imageAlt512: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc412: PropTypes.string,
  imageSrc61: PropTypes.string,
  imageSrc111: PropTypes.string,
  text22: PropTypes.string,
  text24: PropTypes.string,
  text21: PropTypes.string,
  imageSrc31: PropTypes.string,
  text322: PropTypes.string,
  text25: PropTypes.string,
  imageSrc212: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt51: PropTypes.string,
  text3: PropTypes.string,
  imageSrc313: PropTypes.string,
  imageAlt112: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt41: PropTypes.string,
  imageSrc413: PropTypes.string,
  imageAlt6: PropTypes.string,
  text321: PropTypes.string,
  imageAlt10: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc213: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc6: PropTypes.string,
  text: PropTypes.string,
  text23: PropTypes.string,
  imageAlt313: PropTypes.string,
  imageSrc512: PropTypes.string,
  imageSrc62: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt61: PropTypes.string,
  imageSrc311: PropTypes.string,
  imageAlt211: PropTypes.string,
  imageAlt413: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt5: PropTypes.string,
  text32: PropTypes.string,
  imageAlt511: PropTypes.string,
  imageAlt62: PropTypes.string,
  imageSrc513: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc63: PropTypes.string,
  imageAlt2: PropTypes.string,
  text323: PropTypes.string,
}

export default PlanningMobile
