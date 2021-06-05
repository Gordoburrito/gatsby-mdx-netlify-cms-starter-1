import React from "react"
import PropTypes from "prop-types"
import { CallToAction } from "./call-to-action.component"

export const Hero = ({ image, heading, subheading, ...other }) => {
  
  return (
    <div class="hero">
      <h1 class="hero__heading">{heading}</h1>
      <h1 class="hero__subheading">{subheading}</h1>
      <CallToAction class="hero__button">
        BUTTON BUTTON
      </CallToAction>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}
