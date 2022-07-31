import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { Link } from 'gatsby'
import * as styles1 from "../components/thank-you.module.css";
import * as styles from "../components/layout.module.css";
import Header from "../components/header";
import "../components/thank-you.css";

const thankYouPage = props => {


    return (
      <Container>
      <Header
    />
        <div className={styles1.thankyou}>
          <h1>Thank you for getting in touch with us.</h1>
          <h4>We will try our best to get back to you in one business day.</h4>
          <div className={styles1.center}>
            <Link className={styles1.btn} to="/">Back To Home</Link>
          </div>
        </div>
        <div class="thankyou">
      <footer className={styles.footerWrapper}>
      <div class="container1">
        <div class="row">


          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={styles.footerlinks}>
              <li><Link to='/'>Our Products</Link></li>
              <li><a href="/about-us/">About Us</a></li>
              <li><Link to="/contact/">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/*<div class="footericon">*/}
      {/*  <Link href="https://www.facebook.com/portomono.me" target="_blank" class="fa fa-facebook" rel="noreferrer"></Link>*/}
      {/*  <Link href="https://www.youtube.com/channel/UCzBOrjgAKhtaOEnp7JcGRkQ" target="_blank" class="fa fa-youtube" rel="noreferrer"></Link>*/}
      {/*  <Link href="https://www.instagram.com/portomono/" target="_blank" class="fa fa-instagram" rel="noreferrer"></Link>*/}
      {/*</div>*/}
      <div class="line"></div>
      <div class="container1">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <Link to='/'>Recipt</Link>.
            </p>
          </div>

        </div>
      </div>
          </footer>
        </div>

      </Container>

    )
}

export default thankYouPage
