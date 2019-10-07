import React from "react"
import { Link } from "gatsby"

import gopherImg from "../images/gopher.png"
import "../components/img.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="packagema.in" />
    <img src={gopherImg} />
  </div>
)

export default IndexPage
