import React from "react"
import PropTypes from "prop-types"

export const Testimonial = ({ image, attribution, children, ...other }) => {
  
  return (
    <>
      <h2>{attribution}</h2>
      {children}
    </>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string,
}
