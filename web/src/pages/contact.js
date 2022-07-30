import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import jacky from '../images/jacky.png'
import andy from '../images/andy.png'
import * as styles from "../components/contact.module.css";
import Container from '../components/container'
import '../components/contact.module.css'
import headerimg from '../images/contactusheader.png'

const NotFoundPage = () => (
  <Layout >

    <div className={styles.layout}>
      <div className={styles.imgcontainer}>
        <img className={styles.bgImg}src={headerimg} alt="Snow" />
        <div className={styles.centered}><h1>Contact Us</h1>
          <p>Have a question? Need help with the products? Drop us a message here and we will try our best to help you!</p>
      </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contactus}>
          <div className={styles.left}>
            <form id="contactform" className={styles.contactform} name="Contact Form" action="https://getsimpleform.com/messages?form_api_token=98e8867c4b508288f7697c44adfbcb05" method="post">
              <input type='hidden' name='redirect_to' value='http://www.portomono.me/thank-you' />

              <input type="hidden" name="form-name" value="Contact Form" />
              <div className={styles.flex}>

                <div>
                  <input placeholder="Name" type="text" name="name" />
                </div>
                <div>
                  <input placeholder="Phone Number" type="text" name="phonenumber" />
                </div>
              </div>
              <div className={styles.flex}>
                <div>
                  <input placeholder="E-mail" type="email" name="email" />
                </div>
               
              </div>

              <div className={styles.textarea}>
                <textarea placeholder="Your Message" name="message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
