---
templateKey: home-page
title: Home Page
sections:
  - body: <Hero image="" heading="Welcome to " subheading="Rooster Grin"
      buttonText="BUTTON BUTTON"/>
    title: About This Starter
  - body: >-
      Go through each of these directories to understand the project and extend
      from it.

      * *src/cms* - Utilities for working with FrontMatter which Netlify CMS depends on, example previews and example widget registration. This folder also includes a whitelist of components that will be included in the MDX render scope in **cms-components.constants.js**.

      * *src/components* - Components, mostly default with a few additions such as a call to action and a smart link.

      * *src/core* - Core components to render markdown, catch errors

      * *src/page-templates* - Templates for CMS pages and an entry template component that will be used to determine what template should be shown where. Look in particular at **cms-entry.template.js**

      * *src/pages* - Editor content. All CMS-created pages will live in the content directory. Other pages may be modified from the CMS, but cannot be created or deleted.

      * *static/admin* - CMS Editor configuration.
    title: Project Overview
  - body: >-
      
      The `CMSTemplate` component in conjunction with the hidden `templateKey` var controls which template will be used to render each content page. The `CMSTemplate` component will try to map the value of `templateKey` to a component, and fall back to a default if nothing is found. Please see the component for more details.
    title: About Template Keys
  - body: Due to the way Netlify CMS works, some CMS content is saved as Markdown
      `frontmatter` rather than actual markdown. Therefore, fields with a
      markdown editor will save a raw markdown string. It is up to our templates
      to correctly parse markdown. For this, we have the core component
      `<RenderMarkdown>` which will parse MDX upon receiving an MDX string and
      include supplied React components as appropriate. Under the hood, this
      uses [@mdx/runtime](https://mdxjs.com/advanced/runtime) so please look
      there fore configuration details.
    title: Frontmatter & Markdown
  - body: |-
      wsfw

      <Testimonial image="" attribution="– I can see it in your eyes">
        Hello Is it me you're looking for</Testimonial>

      is this working anybetter now?
    title: Hello
---
