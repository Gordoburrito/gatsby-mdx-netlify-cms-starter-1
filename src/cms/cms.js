import CMS from "netlify-cms-app"

import { HomePagePreview, DefaultPagePreview } from "./preview-templates"
import { ctaEditorConfig, testimonialEditorConfig } from "./editor-components"
import {heroEditorConfig} from "./editor-components/hero.editor"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../app.css"

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
CMS.registerEditorComponent(testimonialEditorConfig)
CMS.registerEditorComponent(heroEditorConfig)

