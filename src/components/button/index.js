import React from "react"
import PropTypes from "prop-types"
import css from "./css.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
const Button = ({ disabled, children, onClick }) => {
  return (
    <button className={css.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
const FacebookButton = ({ onClick }) => (
  <button className={css.facebook} onClick={onClick}>
    <FontAwesomeIcon icon={faFacebookF} />
    <p>Login with facebook</p>
  </button>
)

Button.prototypes = {
  disbaled: PropTypes.bool,
  onClick: PropTypes.func,
}
Button.defaultProps = {
  disbaled: false,
  onClick: () => {},
}
FacebookButton.prototypes = {
  onClick: PropTypes.func,
}
FacebookButton.defaultProps = {
  onClick: () => {},
}
export { Button, FacebookButton }
