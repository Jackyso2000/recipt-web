import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import logo from '../images/logo.png'

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img

            className={styles.logo}
            src={logo}
            alt="portomono_logo"
          /></Link>
        <Link className={styles.title} to="/">Recipt</Link>
      </div>

      {/*<button*/}
      {/*  className={styles.toggleNavButton}*/}
      {/*  onClick={showNav ? onHideNav : onShowNav}*/}
      {/*>*/}
      {/*  <Icon symbol="hamburger" />*/}
      {/*</button>*/}

      <nav className={styles.showNav}>
        <Link className={styles.navlink} to="/">Our Products</Link>
        <Link className={styles.navlink} to="/about-us/">About Us</Link>
        <Link className={styles.navlink} to="/contact/">Contact Us</Link>
      </nav>
    </div>
  </div>
);

export default Header;
