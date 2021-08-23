import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome';
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubscribeForm from "../components/SubscribeForm"

const IndexPage = () => (
  <Layout>
    <Seo title=" " />
    <div className="container">
      <div className="row align-item-center justify-content-center">
        <div className="col-12"><h1>MEFIYE</h1></div>
      </div>
      <div className="row align-item-center justify-content-center">
        <div className="col-12 col-md-8">
          <p className="text-align-center">MEFIYE (pronouced meh<span className="dot">&#9679;</span>fyeh) - a play on the term for home in the Asante Twi language native to Ghana.</p>
          <p className="text-align-center">For us, MEFIYE means sanctuary, luxury and self-care. With our collection of affordable luxury home goods, we want to bring a piece of that feeling to you, too.</p>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-align-center">Enter your email address below to discover our products and receive updates about our launch date.</p>
          <SubscribeForm/>
        </div>
      </div>
      <div className="row align-item-center justify-content-center flex-direction-row">
        <Link className="social-icons" to="https://www.instagram.com/mefiyelondon/" target="_blank">
          {/* <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /> */}
          <p>Instagram</p>
        </Link>
        
        <Link className="social-icons" to="https://twitter.com/MEFIYELONDON" target="_blank">
          {/* <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /> */}
          <p>Twitter</p>
        </Link>
      </div>

    </div>


  </Layout>
)

export default IndexPage
