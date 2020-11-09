import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import Img from "gatsby-image"
import css from "./css.module.scss"
import { Button } from "components/button"
import { Pagination, Dot } from "components/pagination"
const Onboarding = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { name: { regex: "/onboarding/" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const [active, setActive] = useState(0)
  const nextButton = React.createRef()
  const illustration1 = data.images.nodes[0].childImageSharp.fluid
  const illustration2 = data.images.nodes[1].childImageSharp.fluid
  const illustration3 = data.images.nodes[2].childImageSharp.fluid
  const nextScreen = () => {
    if (active + 1 < 3) setActive(prevState => prevState + 1)

    if (active + 1 === 2) {
      nextButton.current.setAttribute("disabled", true)
    }
  }
  return (
    <div className={[css.onboarding, css.show, css.reveal].join(" ")}>
      <div className={css.screens}>
        <div className={css.illustrations}>
          <Illustration
            image={illustration1}
            active={active === 0 ? true : false}
          />
          <Illustration
            image={illustration2}
            active={active === 1 ? true : false}
          />
          <Illustration
            image={illustration3}
            active={active === 2 ? true : false}
          />
        </div>

        <Pagination>
          <Dot active={active === 0 ? true : false} />
          <Dot active={active === 1 ? true : false} />
          <Dot active={active === 2 ? true : false} />
        </Pagination>
        <div className={css.cards}>
          <Card
            active={active === 0 ? true : false}
            title="Add Account"
            desc="Add a financial account so you can easily keep track of your spending."
            button="Get started"
          />
          <Card
            active={active === 1 ? true : false}
            title="Add Transactions"
            desc="Easily add a transaction so you can ready know where you stand
          financially."
            button="Get started"
          />
          <Card
            active={active === 2 ? true : false}
            title="Create a Budget"
            desc="Create a budget for the things you do most, so you can know if
          you're overspending."
            button="Get started"
          />
        </div>
      </div>

      <button
        ref={nextButton}
        className={css.nextScreen}
        onClick={() => nextScreen()}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  )
}

const Illustration = ({ image, active }) => {
  return (
    <div className={[css.illustration, active ? css.active : ""].join(" ")}>
      <Img fluid={image} />
    </div>
  )
}
const Card = ({ title, desc, button, active }) => (
  <div className={[css.card, active ? css.active : ""].join(" ")}>
    <div style={{ marginBottom: 50.5, marginTop: 35 }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
    <Button>{button}</Button>
  </div>
)
export default Onboarding
