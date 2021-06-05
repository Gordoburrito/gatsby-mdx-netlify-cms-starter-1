const heroEditor = props =>
  `<Hero image="${props.image || ""}" heading="${props.heading || ""}" subheading="${props.subheading || ""}" buttonText="${props.buttonText || ""}"/>`

export const heroEditorConfig = {
  // Internal id of the component
  id: "hero",
  // Visible label
  label: "Hero Section",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Background Image", name: "backgroundImage", widget: "image"},
    { label: "Heading", name: "heading", widget: "string" },
    { label: "Subheading", name: "subheading", widget: "string" },
    { label: "Button Text", name: "buttonText", widget: "string" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<Hero image="(\S+)" heading="(\S+)" subheading=(\S+) buttonText=(\S+)\/>/g,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      image: match[1],
      heading: match[2],
      subheading: match[3],
      buttonText: match[4],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function(props) {
    return heroEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(props) {
    return heroEditor(props)
  },
}
