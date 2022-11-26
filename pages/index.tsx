import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql, request } from "graphql-request";
import { CustomerReview } from "../components/sections/CustReviewsSection";
import { Partner } from "../components/sections/PartnersSection";
import { FoodAndDrink } from "../components/sections/ServicesSection";
import { Section } from "../components/sections";

type HomeProps = {
  customerReviews: CustomerReview[];
  partnersProp: Partner[];
  foodAndDrinks: FoodAndDrink[];
};

const Home = ({ customerReviews, partnersProp, foodAndDrinks }: HomeProps) => {
  return (
    <div className={styles._container}>
      <Head>
        <title>Fat Slob Plumbing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar Section */}
      {/* <Section.NavBar /> */}
      {/* Intro Section */}
      <Section.Hero />
      {/* Customer Reviews */}
      <Section.CustReviews data={customerReviews}></Section.CustReviews>
      {/* How We Work */}
      <Section.HowWeWork />
      {/* Services */}
      <Section.Services data={foodAndDrinks}></Section.Services>
      {/* Franchises */}
      <Section.Franchises />
      {/* Partners */}
      <Section.Partners data={partnersProp}></Section.Partners>
      {/* About Us */}
      <Section.AboutUs />
      {/* Footer */}

      <main className={styles.main}>
        <div className={styles.grid}></div>
      </main>

      <Section.Footer></Section.Footer>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const custReviewQuery = gql`
    {
      customerReviews {
        customerName
        id
        review
        photo
      }
    }
  `;

  const navLinksQuery = gql`
    {
      navLinks {
        navLinkName
        navLink
        id
      }
    }
  `;

  const partnersQuery = gql`
    {
      partners {
        id
        title
        photo
        desc
      }
    }
  `;

  const foodsAndDrinksQuery = gql`
    {
      foodsAndDrinks {
        edible
        id
      }
    }
  `;

  const custReviewsData = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    custReviewQuery
  );

  const navLinkData = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    navLinksQuery
  );
  const partnersData = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    partnersQuery
  );

  const foodAndDrinksData = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    foodsAndDrinksQuery
  );

  return {
    props: {
      customerReviews: custReviewsData,
      partnersProp: partnersData,
      navLinks: navLinkData,
      foodAndDrinks: foodAndDrinksData,
    }, // will be passed to the page component as props
  };
}
