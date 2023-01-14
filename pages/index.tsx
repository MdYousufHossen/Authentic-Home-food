import Footer from "@components/Footer";

import Banner from "@components/Banner";
import Contact from "@container/Contact";
import HomeKitchen from "@container/HomeKitchen";
import OurBlog from "@container/OurBlog";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <HomeKitchen />
      <OurBlog />
      <Contact />
      <Footer />
    </Fragment>
  );
}
