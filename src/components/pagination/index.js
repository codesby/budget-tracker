import React from "react"
import css from "./css.module.scss"
const Pagination = ({ children }) => {
  return <div className={css.pagination}>{children}</div>
}
const Dot = ({ active }) => (
  <div className={[css.button, active ? css.active : ""].join(" ")}></div>
)

export { Pagination, Dot }
