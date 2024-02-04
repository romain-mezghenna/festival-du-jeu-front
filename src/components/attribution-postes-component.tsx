import React from 'react'

import PropTypes from 'prop-types'

import './attribution-postes-component.css'

function AttributionPostesComponent(props : any){
  return (
    <div
      className={`attribution-postes-component-container ${props.rootClassName} `}
    >
      <div className="attribution-postes-component-container01">
        <span className="attribution-postes-component-text">{props.text}</span>
        <select className="attribution-postes-component-select">
          <option value="Option 1" className="">
            Option 1
          </option>
          <option value="Option 1" className="">
            Option 1
          </option>
          <option value="Option 2" className="">
            Option 2
          </option>
          <option value="Option 2" className="">
            Option 2
          </option>
          <option value="Option 3" className="">
            Option 3
          </option>
          <option value="Option 3" className="">
            Option 3
          </option>
        </select>
        <span className="attribution-postes-component-text01">
          {props.text1}
        </span>
        <div
          data-thq="thq-dropdown"
          className="attribution-postes-component-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="attribution-postes-component-dropdown-toggle"
          >
            <span className="attribution-postes-component-text02">
              Menu Item
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="attribution-postes-component-dropdown-arrow"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="attribution-postes-component-icon"
              >
                <path d="M426 726v-428l214 214z" className=""></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="attribution-postes-component-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="attribution-postes-component-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="attribution-postes-component-dropdown-toggle1"
              >
                <span className="attribution-postes-component-text03">
                  Sub-menu Item
                </span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="attribution-postes-component-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="attribution-postes-component-dropdown-toggle2"
              >
                <span className="attribution-postes-component-text04">
                  Sub-menu Item
                </span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="attribution-postes-component-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="attribution-postes-component-dropdown-toggle3"
              >
                <span className="attribution-postes-component-text05">
                  Sub-menu Item
                </span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="attribution-postes-component-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="attribution-postes-component-dropdown-toggle4"
              >
                <span className="attribution-postes-component-text06">
                  Sub-menu Item
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="attribution-postes-component-container02">
        <div className="attribution-postes-component-container03">
          <div className="attribution-postes-component-container04">
            <label className="attribution-postes-component-text07">
              {props.text26}
            </label>
          </div>
          <div className="attribution-postes-component-container05">
            <label className="attribution-postes-component-text08">
              {props.text251}
            </label>
          </div>
          <div className="attribution-postes-component-container06">
            <label className="attribution-postes-component-text09">
              {props.text241}
            </label>
          </div>
          <div className="attribution-postes-component-container07">
            <label className="attribution-postes-component-text10">
              {props.text231}
            </label>
          </div>
          <div className="attribution-postes-component-container08">
            <label className="attribution-postes-component-text11">
              {props.text221}
            </label>
          </div>
          <div className="attribution-postes-component-container09">
            <label className="attribution-postes-component-text12">
              {props.text211}
            </label>
          </div>
        </div>
        <div className="attribution-postes-component-container10">
          <div className="attribution-postes-component-container11">
            <span className="attribution-postes-component-text13">
              {props.text3}
            </span>
          </div>
          <div className="attribution-postes-component-container12">
            <img
              alt={props.imageAlt10}
              src={props.imageSrc10}
              className="attribution-postes-component-image"
            />
          </div>
          <div className="attribution-postes-component-container13">
            <img
              alt={props.imageAlt11}
              src={props.imageSrc11}
              className="attribution-postes-component-image01"
            />
          </div>
          <div className="attribution-postes-component-container14">
            <img
              alt={props.imageAlt21}
              src={props.imageSrc21}
              className="attribution-postes-component-image02"
            />
          </div>
          <div className="attribution-postes-component-container15">
            <img
              alt={props.imageAlt31}
              src={props.imageSrc31}
              className="attribution-postes-component-image03"
            />
          </div>
          <div className="attribution-postes-component-container16">
            <img
              alt={props.imageAlt41}
              src={props.imageSrc41}
              className="attribution-postes-component-image04"
            />
          </div>
          <div className="attribution-postes-component-container17">
            <img
              alt={props.imageAlt51}
              src={props.imageSrc51}
              className="attribution-postes-component-image05"
            />
          </div>
        </div>
        <div className="attribution-postes-component-container18">
          <div className="attribution-postes-component-container19">
            <span className="attribution-postes-component-text14">
              {props.text32}
            </span>
          </div>
          <div className="attribution-postes-component-container20">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="attribution-postes-component-image06"
            />
          </div>
          <div className="attribution-postes-component-container21">
            <img
              alt={props.imageAlt111}
              src={props.imageSrc111}
              className="attribution-postes-component-image07"
            />
          </div>
          <div className="attribution-postes-component-container22">
            <img
              alt={props.imageAlt211}
              src={props.imageSrc211}
              className="attribution-postes-component-image08"
            />
          </div>
          <div className="attribution-postes-component-container23">
            <img
              alt={props.imageAlt311}
              src={props.imageSrc311}
              className="attribution-postes-component-image09"
            />
          </div>
          <div className="attribution-postes-component-container24">
            <img
              alt={props.imageAlt411}
              src={props.imageSrc411}
              className="attribution-postes-component-image10"
            />
          </div>
          <div className="attribution-postes-component-container25">
            <img
              alt={props.imageAlt511}
              src={props.imageSrc511}
              className="attribution-postes-component-image11"
            />
          </div>
        </div>
        <div className="attribution-postes-component-container26">
          <div className="attribution-postes-component-container27">
            <span className="attribution-postes-component-text15">
              {props.text321}
            </span>
          </div>
          <div className="attribution-postes-component-container28">
            <img
              alt={props.imageAlt61}
              src={props.imageSrc61}
              className="attribution-postes-component-image12"
            />
          </div>
          <div className="attribution-postes-component-container29">
            <img
              alt={props.imageAlt1111}
              src={props.imageSrc1111}
              className="attribution-postes-component-image13"
            />
          </div>
          <div className="attribution-postes-component-container30">
            <img
              alt={props.imageAlt2111}
              src={props.imageSrc2111}
              className="attribution-postes-component-image14"
            />
          </div>
          <div className="attribution-postes-component-container31">
            <img
              alt={props.imageAlt3111}
              src={props.imageSrc3111}
              className="attribution-postes-component-image15"
            />
          </div>
          <div className="attribution-postes-component-container32">
            <img
              alt={props.imageAlt4111}
              src={props.imageSrc4111}
              className="attribution-postes-component-image16"
            />
          </div>
          <div className="attribution-postes-component-container33">
            <img
              alt={props.imageAlt5111}
              src={props.imageSrc5111}
              className="attribution-postes-component-image17"
            />
          </div>
        </div>
        <div className="attribution-postes-component-container34">
          <div className="attribution-postes-component-container35">
            <span className="attribution-postes-component-text16">
              {props.text322}
            </span>
          </div>
          <div className="attribution-postes-component-container36">
            <img
              alt={props.imageAlt62}
              src={props.imageSrc62}
              className="attribution-postes-component-image18"
            />
          </div>
          <div className="attribution-postes-component-container37">
            <img
              alt={props.imageAlt112}
              src={props.imageSrc112}
              className="attribution-postes-component-image19"
            />
          </div>
          <div className="attribution-postes-component-container38">
            <img
              alt={props.imageAlt212}
              src={props.imageSrc212}
              className="attribution-postes-component-image20"
            />
          </div>
          <div className="attribution-postes-component-container39">
            <img
              alt={props.imageAlt312}
              src={props.imageSrc312}
              className="attribution-postes-component-image21"
            />
          </div>
          <div className="attribution-postes-component-container40">
            <img
              alt={props.imageAlt412}
              src={props.imageSrc412}
              className="attribution-postes-component-image22"
            />
          </div>
          <div className="attribution-postes-component-container41">
            <img
              alt={props.imageAlt512}
              src={props.imageSrc512}
              className="attribution-postes-component-image23"
            />
          </div>
        </div>
        <div className="attribution-postes-component-container42">
          <div className="attribution-postes-component-container43">
            <span className="attribution-postes-component-text17">
              {props.text323}
            </span>
          </div>
          <div className="attribution-postes-component-container44">
            <img
              alt={props.imageAlt63}
              src={props.imageSrc63}
              className="attribution-postes-component-image24"
            />
          </div>
          <div className="attribution-postes-component-container45">
            <img
              alt={props.imageAlt113}
              src={props.imageSrc113}
              className="attribution-postes-component-image25"
            />
          </div>
          <div className="attribution-postes-component-container46">
            <img
              alt={props.imageAlt213}
              src={props.imageSrc213}
              className="attribution-postes-component-image26"
            />
          </div>
          <div className="attribution-postes-component-container47">
            <img
              alt={props.imageAlt313}
              src={props.imageSrc313}
              className="attribution-postes-component-image27"
            />
          </div>
          <div className="attribution-postes-component-container48">
            <img
              alt={props.imageAlt413}
              src={props.imageSrc413}
              className="attribution-postes-component-image28"
            />
          </div>
          <div className="attribution-postes-component-container49">
            <img
              alt={props.imageAlt513}
              src={props.imageSrc513}
              className="attribution-postes-component-image29"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttributionPostesComponent
