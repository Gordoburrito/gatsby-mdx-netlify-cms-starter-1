import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
} from "../cms"
import { ColumnContainer } from "../components/column-container.component"
import { Carousel, CarouselBlurb } from "../components/carousel.component"




export const HomePageTemplate = ({ title, sections }) => (
  <article>
    <SEO title={title} />
    {/* <Heading tag={1}>{title}</Heading> */}
    <h1>Start Here</h1>
    {/* <Hero 
      image="" 
      heading="Welcome to" 
      subheading="Rooster Grin" 
      buttonText="BUTTON BUTTON" 
      buttonLink="#"
    />
    <TitleHTMLBodyButton
      title=""
      body=""
      buttonText="BUTTON BUTTON"
      buttonLink="#"
      buttonStyle=""
    />
    <IconList
      icons={[
          {name: "pad",
          icon: "img"},
          {name: "pad",
          icon: "img"},
          {name: "pad",
          icon: "img"},
          {name: "pad",
          icon: "img"},
      ]}
    />
    */}
    {/* <Carousel blurbs={[
      {name: "John Doe", date: "date", quote: "This is the best website"},
      {name: "John Doe", date: "date", quote: "This is the best website"},
    ]}/> */}
      <TitleHTMLBodyButton
        title="LOREM IPSUM DOLOR SIT AMET"
        body="Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
        buttonText="BUTTON BUTTON"
        buttonLink="#"
        buttonStyle="secondary"
      />
      <CarouselBlurb name="John Doe" date="date" quote="this is the best website"/>
    {/*
    <Section layout="split or full background"/>
    <Section>
      <TitleHTMLBodyButton/>
      <Image/>
    </Section>
    <Section>
      <TitleHTMLBodyButton/>
      <Fullbackground/>
    </Section> */} 
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
