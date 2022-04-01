import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <nav id="nav">
      <ul className="container">
        <li><a href="#top">Top</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <Seo title="Home" />
    <h1>Hi, Im JRowah</h1>
    <p>Welcome to what in the near future will be my website. I am a self-taught software developer.</p>
    <p>I am working on the structure. Check back soon. Meanwhile have a look at <Link>https://jrowah.netlify.app/</Link></p>
    <StaticImage
      src="../images/ppic.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Check out my Blog</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
