import React from "react"

export const Column = ({ columnWidth, children, ...other }) => { 
  return <div className = {"col"} style={{ "--width": columnWidth ? columnWidth : "6"}}>{children}</div>
}

