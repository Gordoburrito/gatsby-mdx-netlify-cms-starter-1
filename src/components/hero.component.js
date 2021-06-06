import React from "react"
import PropTypes from "prop-types"
import { CallToAction } from "./call-to-action.component"
import '../styles/hero.css'

export const Hero = ({ image, heading, subheading, buttonText, ...other }) => {
  
  return (
    <div class="hero">
      {/* <Image image={image}></Image> */}

      <h1 className="hero__heading">{heading}</h1>
      <h1 className="hero__subheading">{subheading}</h1>
      <CallToAction bgColor="primary">
        {buttonText}
      </CallToAction>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}
