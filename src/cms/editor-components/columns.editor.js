const ctaEditor = props =>
  `<Column columnWidth="${props.width || ""}" >${props.content || ""} </Column>`

export const columnEditorConfig = {
  // Internal id of the component
  id: "column",
  // Visible label
  label: "Column",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Column Width", name: "width", widget: "number" },
    { label: "Content", name: "content", widget: "markdown" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<Column columnWidth=(\S+)>(\S+)<\/Column>/g,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      width: match[1],
      content: match[2]
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function(props) {
    return ctaEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(props) {
    return ctaEditor(props)
  },
}
