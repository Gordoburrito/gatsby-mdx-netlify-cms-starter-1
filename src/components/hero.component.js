import React from "react"
import PropTypes from "prop-types"
import { CallToAction } from "./call-to-action.component"
import Image from "./image";

export const Hero = ({ image, heading, subheading, buttonText, ...other }) => {
  
  return (
    <div class="hero">
      {/* <Image image={image}></Image> */}
      <h1 class="hero__heading">{heading}</h1>
      <h1 class="hero__subheading">{subheading}</h1>
      <CallToAction class="hero__button">
        {buttonText}
      </CallToAction>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}
