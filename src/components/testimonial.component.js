import React from "react"
import PropTypes from "prop-types"

export const Testimonial = ({ image, attribution, children, ...other }) => {
  const style = {
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    padding: "1.5em 2.5em",
    color: "white",
  }
  
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
