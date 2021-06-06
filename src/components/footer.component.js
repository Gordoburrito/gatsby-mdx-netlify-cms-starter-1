import React from "react"

export const Footer = ({ socialIcons }) => { 
  return (
    <div className="footer">  
      <h3 className="footer__title">Follow us:</h3>
      <div className="footer__social-icons-list">
        {socialIcons.map((icon, i) => {
          return (<div className="social-icons-list__item" key={i}>
            {icon}
          </div>)
        })}
      </div>
    </div>
  )
}

