import React from "react"
import css from "./css.module.scss"

function validateEmail(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true
  }
  alert("You have entered an invalid email address!")
  return false
}

const Input = ({ type, label, name, placeholder, onChange }) => {
  
  return (
    <label htmlFor={name} className={css.field}>
      <span>{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  )
}
export default Input
