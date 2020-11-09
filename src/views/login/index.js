import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import css from "./css.module.scss"

import Input from "components/input"
import { Button, FacebookButton } from "components/button"
import AppBar from "components/appbar"
const Login = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "onboarding-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 145) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const onSubmit = e => {
    e.preventDefault()
  }

  useEffect(() => {
    // document.querySelector("main").addEventListener("resize", e => {
    //   console.log(window.innerHeight)
    //   //   alert("Height Changed")
    // })
  })
  return (
    <div>
      <AppBar
        title={<h2>Codesby budget tracker</h2>}
        actions={<Link to="#">Sign up</Link>}
      />
      <main>
        <div className={css.image}>
          <Img fluid={data.image.childImageSharp.fluid} alt="Illustration" />
        </div>

        <form onSubmit={onSubmit}>
          <h1>Login to your account</h1>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="you@domain.com"
          />
          <div className={css.inline}>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="**********"
            />
            <Button disabled>
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </Button>
          </div>
          <span>Or</span>
          <FacebookButton />
          <Link to="#">Forget password?</Link>
        </form>
      </main>
    </div>
  )
}
export default Login
