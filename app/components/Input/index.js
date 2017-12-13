import React from "react"
import PropTypes from 'prop-types';
import cssModules from "react-css-modules"
import style from "./style.css"

export const Input = props => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      className={style[props.type]}
      id={props.id} />
  )
}

export default cssModules(Input, style)

Input.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
