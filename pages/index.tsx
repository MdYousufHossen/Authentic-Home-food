// import Footer from "@components/Footer";
// import HomeKitchen from "@container/HomeKitchen";
import Banner from "@components/Banner";
import Footer from "@components/Footer";

// const Contact = dynamic(() => import("@container/Contact"), { ssr: false });

// const HomeKitchen = dynamic(() => import("@container/HomeKitchen"), {
//   ssr: false,
// });
// const OurBlog = dynamic(() => import("@container/OurBlog"), {
//   ssr: false,
// });

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
