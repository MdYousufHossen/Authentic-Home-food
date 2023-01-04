import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Contact from "@container/Contact";
import HomeKitchen from "@container/HomeKitchen";
import OurBlog from "@container/OurBlog";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export default function Home() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  console.log("hello", count);
  const dispatch = useAppDispatch();

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
