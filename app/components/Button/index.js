import React from "react"
import PropTypes from 'prop-types';
import cssModules from "react-css-modules"
import style from "./style.css"

export const Button = props => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={style[props.type]}>
      {props.children}
    </button>
  )
}

export default cssModules(Button, style)

Button.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
