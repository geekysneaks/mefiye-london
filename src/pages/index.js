import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import SubscribeForm from "../components/SubscribeForm"

const IndexPage = () => (
  <Layout>
    <Seo title="Mefiye London" />
    <div className="container">
      <div className="row">
        <div className="col-12"><h1>Mefiye London</h1></div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <p>"Mefiye" (pronouced meh&#9679;fyeh) ~ a play on the term for "home" in the Asante Twi language native to Ghana</p>
          <p>For us, <Link to="https://www.instagram.com/explore/tags/mefiyemeans/" target="_blank">#mefiyemeans</Link> sanctuary, luxury and warmth. With our collection of affordable luxury home fragrances and goods, we want to bring a piece of that feeling to you, too.</p>
        </div>
        <div className="col-12 col-md-6">
          <p>Enter your email address below to discover pur products and receive updates about our launch date.</p>
          <SubscribeForm/>
        </div>
      </div>

    </div>


  </Layout>
)

export default IndexPage
