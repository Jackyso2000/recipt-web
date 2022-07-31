import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import jacky from '../images/jacky.png'
import andy from '../images/andy.png'
import * as styles from "../components/about-us.module.css";

const NotFoundPage = () => (
  <Layout >
    <h1 className={styles.h1} >Our Team</h1>
    <div className={styles.layout}>
    <div className={styles.people}>
      <img
        className={styles.img}
      src={jacky}
      />
        <h2>Jacky</h2>

      <p className={styles.para}>
      Graduated from Singapore Polytechnic with a Diploma in Information Technology
      Full Time Tech Engineer in Singtel & Experience in Freelance App / Web Development
      Coder, Developer
</p>
    </div>
    <div className={styles.people}>
    <img
        className={styles.img}
      src={andy}
        />
        <h2>Andy</h2>
      <p className={styles.para}>
      Student taking a gap year after A-Level Examination
      Self-Taught Coder
      Project Management, Planner, Second Developer
</p>
      </div>
      </div>
  </Layout>
);

export default NotFoundPage;
