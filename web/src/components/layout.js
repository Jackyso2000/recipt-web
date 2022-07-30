import React from "react";
import Header from "./header";
import { Link } from 'gatsby'

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
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
  </>
);

export default Layout;
