import React from 'react'

import PropTypes from 'prop-types'

import './planning-individuel-component.css'

const PlanningIndividuelComponent = (props) => {
  return (
    <div
      className={`planning-individuel-component-container ${props.rootClassName} `}
    >
      <span className="planning-individuel-component-text">{props.text}</span>
      <div className="planning-individuel-component-container01">
        <select className="planning-individuel-component-select">
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
      </div>
      <div className="planning-individuel-component-container02">
        <div className="planning-individuel-component-container03">
          <div className="planning-individuel-component-container04">
            <label className="planning-individuel-component-text01">
              {props.text26}
            </label>
          </div>
          <div className="planning-individuel-component-container05">
            <label className="planning-individuel-component-text02">
              {props.text251}
            </label>
          </div>
          <div className="planning-individuel-component-container06">
            <label className="planning-individuel-component-text03">
              {props.text241}
            </label>
          </div>
          <div className="planning-individuel-component-container07">
            <label className="planning-individuel-component-text04">
              {props.text231}
            </label>
          </div>
          <div className="planning-individuel-component-container08">
            <label className="planning-individuel-component-text05">
              {props.text221}
            </label>
          </div>
          <div className="planning-individuel-component-container09">
            <label className="planning-individuel-component-text06">
              {props.text211}
            </label>
          </div>
        </div>
        <div className="planning-individuel-component-container10">
          <div className="planning-individuel-component-container11">
            <span className="planning-individuel-component-text07">
              {props.text3}
            </span>
          </div>
          <div className="planning-individuel-component-container12">
            <img
              alt={props.imageAlt10}
              src={props.imageSrc10}
              className="planning-individuel-component-image"
            />
          </div>
          <div className="planning-individuel-component-container13">
            <img
              alt={props.imageAlt11}
              src={props.imageSrc11}
              className="planning-individuel-component-image01"
            />
          </div>
          <div className="planning-individuel-component-container14">
            <img
              alt={props.imageAlt21}
              src={props.imageSrc21}
              className="planning-individuel-component-image02"
            />
          </div>
          <div className="planning-individuel-component-container15">
            <img
              alt={props.imageAlt31}
              src={props.imageSrc31}
              className="planning-individuel-component-image03"
            />
          </div>
          <div className="planning-individuel-component-container16">
            <img
              alt={props.imageAlt41}
              src={props.imageSrc41}
              className="planning-individuel-component-image04"
            />
          </div>
          <div className="planning-individuel-component-container17">
            <img
              alt={props.imageAlt51}
              src={props.imageSrc51}
              className="planning-individuel-component-image05"
            />
          </div>
        </div>
        <div className="planning-individuel-component-container18">
          <div className="planning-individuel-component-container19">
            <span className="planning-individuel-component-text08">
              {props.text32}
            </span>
          </div>
          <div className="planning-individuel-component-container20">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="planning-individuel-component-image06"
            />
          </div>
          <div className="planning-individuel-component-container21">
            <img
              alt={props.imageAlt111}
              src={props.imageSrc111}
              className="planning-individuel-component-image07"
            />
          </div>
          <div className="planning-individuel-component-container22">
            <img
              alt={props.imageAlt211}
              src={props.imageSrc211}
              className="planning-individuel-component-image08"
            />
          </div>
          <div className="planning-individuel-component-container23">
            <img
              alt={props.imageAlt311}
              src={props.imageSrc311}
              className="planning-individuel-component-image09"
            />
          </div>
          <div className="planning-individuel-component-container24">
            <img
              alt={props.imageAlt411}
              src={props.imageSrc411}
              className="planning-individuel-component-image10"
            />
          </div>
          <div className="planning-individuel-component-container25">
            <img
              alt={props.imageAlt511}
              src={props.imageSrc511}
              className="planning-individuel-component-image11"
            />
          </div>
        </div>
        <div className="planning-individuel-component-container26">
          <div className="planning-individuel-component-container27">
            <span className="planning-individuel-component-text09">
              {props.text321}
            </span>
          </div>
          <div className="planning-individuel-component-container28">
            <img
              alt={props.imageAlt61}
              src={props.imageSrc61}
              className="planning-individuel-component-image12"
            />
          </div>
          <div className="planning-individuel-component-container29">
            <img
              alt={props.imageAlt1111}
              src={props.imageSrc1111}
              className="planning-individuel-component-image13"
            />
          </div>
          <div className="planning-individuel-component-container30">
            <img
              alt={props.imageAlt2111}
              src={props.imageSrc2111}
              className="planning-individuel-component-image14"
            />
          </div>
          <div className="planning-individuel-component-container31">
            <img
              alt={props.imageAlt3111}
              src={props.imageSrc3111}
              className="planning-individuel-component-image15"
            />
          </div>
          <div className="planning-individuel-component-container32">
            <img
              alt={props.imageAlt4111}
              src={props.imageSrc4111}
              className="planning-individuel-component-image16"
            />
          </div>
          <div className="planning-individuel-component-container33">
            <img
              alt={props.imageAlt5111}
              src={props.imageSrc5111}
              className="planning-individuel-component-image17"
            />
          </div>
        </div>
        <div className="planning-individuel-component-container34">
          <div className="planning-individuel-component-container35">
            <span className="planning-individuel-component-text10">
              {props.text322}
            </span>
          </div>
          <div className="planning-individuel-component-container36">
            <img
              alt={props.imageAlt62}
              src={props.imageSrc62}
              className="planning-individuel-component-image18"
            />
          </div>
          <div className="planning-individuel-component-container37">
            <img
              alt={props.imageAlt112}
              src={props.imageSrc112}
              className="planning-individuel-component-image19"
            />
          </div>
          <div className="planning-individuel-component-container38">
            <img
              alt={props.imageAlt212}
              src={props.imageSrc212}
              className="planning-individuel-component-image20"
            />
          </div>
          <div className="planning-individuel-component-container39">
            <img
              alt={props.imageAlt312}
              src={props.imageSrc312}
              className="planning-individuel-component-image21"
            />
          </div>
          <div className="planning-individuel-component-container40">
            <img
              alt={props.imageAlt412}
              src={props.imageSrc412}
              className="planning-individuel-component-image22"
            />
          </div>
          <div className="planning-individuel-component-container41">
            <img
              alt={props.imageAlt512}
              src={props.imageSrc512}
              className="planning-individuel-component-image23"
            />
          </div>
        </div>
        <div className="planning-individuel-component-container42">
          <div className="planning-individuel-component-container43">
            <span className="planning-individuel-component-text11">
              {props.text323}
            </span>
          </div>
          <div className="planning-individuel-component-container44">
            <img
              alt={props.imageAlt63}
              src={props.imageSrc63}
              className="planning-individuel-component-image24"
            />
          </div>
          <div className="planning-individuel-component-container45">
            <img
              alt={props.imageAlt113}
              src={props.imageSrc113}
              className="planning-individuel-component-image25"
            />
          </div>
          <div className="planning-individuel-component-container46">
            <img
              alt={props.imageAlt213}
              src={props.imageSrc213}
              className="planning-individuel-component-image26"
            />
          </div>
          <div className="planning-individuel-component-container47">
            <img
              alt={props.imageAlt313}
              src={props.imageSrc313}
              className="planning-individuel-component-image27"
            />
          </div>
          <div className="planning-individuel-component-container48">
            <img
              alt={props.imageAlt413}
              src={props.imageSrc413}
              className="planning-individuel-component-image28"
            />
          </div>
          <div className="planning-individuel-component-container49">
            <img
              alt={props.imageAlt513}
              src={props.imageSrc513}
              className="planning-individuel-component-image29"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PlanningIndividuelComponent.defaultProps = {
  imageAlt62: 'image',
  text241: 'Espace A3',
  imageAlt512: 'image',
  imageSrc112:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text231: 'Espace B2',
  text211: 'Espace B5',
  imageAlt10: 'image',
  imageAlt111: 'image',
  imageSrc31:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt411: 'image',
  text321: '14 - 17',
  imageSrc211:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text322: '17 -20',
  imageSrc411:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc213:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt6: 'image',
  imageAlt511: 'image',
  imageSrc5111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc513:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt113: 'image',
  imageSrc63:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc512:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text323: '20 - 22',
  imageAlt211: 'image',
  imageAlt63: 'image',
  imageAlt51: 'image',
  text32: '11 - 14',
  rootClassName: '',
  imageAlt2111: 'image',
  imageSrc413:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt41: 'image',
  imageSrc51:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc3111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt311: 'image',
  imageSrc311:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc113:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text3: '9 - 11',
  imageSrc1111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc11:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text221: 'Espace B4',
  imageAlt61: 'image',
  imageSrc2111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text: 'Choisir le jour :',
  text26: 'Espace A1',
  imageSrc21:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt31: 'image',
  imageAlt5111: 'image',
  imageAlt412: 'image',
  imageAlt1111: 'image',
  imageSrc10:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt513: 'image',
  imageAlt11: 'image',
  imageSrc412:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc313:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt413: 'image',
  imageAlt213: 'image',
  imageAlt212: 'image',
  imageSrc511:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt21: 'image',
  imageAlt313: 'image',
  imageSrc61:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc62:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text251: 'Espace A2',
  imageAlt112: 'image',
  imageSrc212:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc6:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc312:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt3111: 'image',
  imageSrc111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc4111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt312: 'image',
  imageAlt4111: 'image',
  imageSrc41:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
}

PlanningIndividuelComponent.propTypes = {
  imageAlt62: PropTypes.string,
  text241: PropTypes.string,
  imageAlt512: PropTypes.string,
  imageSrc112: PropTypes.string,
  text231: PropTypes.string,
  text211: PropTypes.string,
  imageAlt10: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc31: PropTypes.string,
  imageAlt411: PropTypes.string,
  text321: PropTypes.string,
  imageSrc211: PropTypes.string,
  text322: PropTypes.string,
  imageSrc411: PropTypes.string,
  imageSrc213: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt511: PropTypes.string,
  imageSrc5111: PropTypes.string,
  imageSrc513: PropTypes.string,
  imageAlt113: PropTypes.string,
  imageSrc63: PropTypes.string,
  imageSrc512: PropTypes.string,
  text323: PropTypes.string,
  imageAlt211: PropTypes.string,
  imageAlt63: PropTypes.string,
  imageAlt51: PropTypes.string,
  text32: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt2111: PropTypes.string,
  imageSrc413: PropTypes.string,
  imageAlt41: PropTypes.string,
  imageSrc51: PropTypes.string,
  imageSrc3111: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc311: PropTypes.string,
  imageSrc113: PropTypes.string,
  text3: PropTypes.string,
  imageSrc1111: PropTypes.string,
  imageSrc11: PropTypes.string,
  text221: PropTypes.string,
  imageAlt61: PropTypes.string,
  imageSrc2111: PropTypes.string,
  text: PropTypes.string,
  text26: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt5111: PropTypes.string,
  imageAlt412: PropTypes.string,
  imageAlt1111: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageAlt513: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc412: PropTypes.string,
  imageSrc313: PropTypes.string,
  imageAlt413: PropTypes.string,
  imageAlt213: PropTypes.string,
  imageAlt212: PropTypes.string,
  imageSrc511: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageAlt313: PropTypes.string,
  imageSrc61: PropTypes.string,
  imageSrc62: PropTypes.string,
  text251: PropTypes.string,
  imageAlt112: PropTypes.string,
  imageSrc212: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc312: PropTypes.string,
  imageAlt3111: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc4111: PropTypes.string,
  imageAlt312: PropTypes.string,
  imageAlt4111: PropTypes.string,
  imageSrc41: PropTypes.string,
}

export default PlanningIndividuelComponent
