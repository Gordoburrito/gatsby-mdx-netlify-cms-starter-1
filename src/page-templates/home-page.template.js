import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
} from "../cms"
import { ColumnContainer } from "../components/column-container.component"




export const HomePageTemplate = ({ title, sections }) => (
  <article>
    <SEO title={title} />
    {/* <Heading tag={1}>{title}</Heading> */}
    <h1>Start Here</h1>
    
    {withFallback(sections, []).map((section, i) => {
      return (
        <section key={i}>
          <RenderMarkdown
            md={section.body}
            />
          <hr />
        </section>
      )
    })}
  </article>
)

const HomePage = ({ pageContext }) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
