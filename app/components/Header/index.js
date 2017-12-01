import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

export const Header = () => {
  return (
    <div className={style.container}>
      <h2>Spofford</h2>
      <h2>The Design Questionnaire</h2>
    </div>
  )
}

export default cssModules(Header, style)
