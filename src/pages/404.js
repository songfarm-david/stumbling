import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page404 = () => (
  <Layout>
    <SEO title="404 Page" />
    <h1>Ooops! Nothing at this page.</h1>
    <p>This page doesn't exist. Go back. Or choose something else:</p>
  </Layout>
)

export default Page404
