import React from "react"
import css from "./css.module.scss"
const AppBar = ({ title, actions, children }) => {
  return (
    <header>
      <div className={css.topMenu}>
        {title}
        {actions}
      </div>
      <div>{children}</div>
    </header>
  )
}
export default AppBar
