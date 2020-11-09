import React from "react"
import { Router } from "@reach/router"
import NotFound from "views/404"
import Onboarding from "views/onboarding"
import Login from "views/login"
import Register from "views/register"
import App from "views/app"
const IndexPage = () => (
  <Router basepath="/">
    <App path="/" />
    <Login path="/login" />
    <Register path="/register" />
    <Onboarding path="/onboarding" />
    <NotFound default />
  </Router>
)

export default IndexPage
