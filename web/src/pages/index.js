import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Link } from 'gatsby';

import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import scratch from '../images/scratch.jpeg'
import money from '../images/moneyinsight.png'
import receipt from '../images/receipt.png'
import thirdpartyreceipt from '../images/3rdpartyreceipt.png'
import payngo from '../images/payngo.png'
import list from '../images/receiptlist.png'
import member from '../images/membership.png'
import bg from '../images/background.jpg'
import contactus from '../images/contact-us.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  useEffect(() => {
    AOS.init();
  });
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div class="bgcontainer" style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        height: '600px',
        width:'100%'
      }}>
          {/*<img class="bg" src={bg} alt="portomono glass protect screen protector scratch test" />*/}
        <h1 class="bgcenter">Welcome to {site.title}</h1>

          <h2 class="bgcenter1">The Advanced POS System that offers more features than ever.</h2>
      </div>
      <h1 class="title">Our Features</h1>
        <div class="scroll">
          <div class="scrollcontainer" data-aos="fade-up"
            data-aos-anchor-placement="top">
        <div class="feature">
          <div class="left1">
            <img src={money} class="left" alt="portomono glass protect screen protector scratch test" />
          </div>
          <div class="right">
            <h4>Money Insight</h4>
            <p>To track all your spendings and expenses. All in one place.</p>
          </div>
        </div>
        </div>

          <div class="scrollcontainer" data-aos="fade-up"
            data-aos-anchor-placement="top">
        <div class="black">

        <div class="feature">

          <div class="right1">
            <h4>QR Generated E-Receipt</h4>
                  <p>Searching high and low for that receipt buried in your e-mail or under your bed? Receipt’s E-Receipt feature can keep your receipt forever with just a scan of QR code!</p>
          </div>
          <div class="left1">
            <img src={receipt} class="left" alt="portomono glass protect screen protector full coverage" />
          </div>
        </div>
        </div>
        </div>
        <div class="scrollcontainer" data-aos="fade-up"
          data-aos-anchor-placement="top">
          <div class="feature">
            <div class="left1">
              <img src={thirdpartyreceipt} class="left" alt="portomono glass protect screen protector scratch test" />
            </div>
            <div class="right">
              <h4>Adding Third-Party Receipt</h4>
              <p>Getting a receipt from a retailer that does not support Recipt QR code? Fret not! You can manually add a screenshot of your receipt into our apps.</p>
            </div>
          </div>
        </div>
      
      
          <div class="scrollcontainer" data-aos="fade-up"
            data-aos-anchor-placement="top">
          <div class="black">

            <div class="feature">

              <div class="right1">
                <h4>Pay & Go</h4>
                <p>Tired of the long queue forming up on your weekend grocery trip? Use Recipt Pay & Go to pay scan all the products while you shop and pay on your phone!</p>
              </div>
              <div class="left1">
                <img src={payngo} class="left" alt="portomono glass protect screen protector full coverage" />
              </div>
            </div>
            </div>
        </div>
        <div class="installationguide">
          <div class="text">
            <div class="lefty">
              Excited to find out more about our service?
            </div>
            <div class="centre">
              <img src={contactus} loading="lazy" alt="contactus" />
            </div>
            <div class="centre1">
              <Link to="/contact/"><button class="btn">CONTACT US NOW</button></Link>
            </div>
          </div>
        </div>
        </div>
         </Layout>
  );
};

export default IndexPage;
