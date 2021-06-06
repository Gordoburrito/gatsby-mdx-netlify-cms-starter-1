import React from "react"
import { CallToAction } from "./call-to-action.component";

export const TitleHTMLBodyButton = ({ title, body, buttonText, buttonLink, buttonStyle }) => {
  function createMarkup(body) {
    return {__html: body};
  }
  
  function MyComponent() {
    return ;
  }
  return (
    <section>
      {title ? <h2 className="section__title">{title}</h2> : "" }
      {body ? <div className="section__body" dangerouslySetInnerHTML={createMarkup(body)}/> : "" }
      {buttonText || buttonLink ? <CallToAction url={buttonLink} bgColor={buttonStyle}>{buttonText}</CallToAction> : ""}
    </section>
  )
}
