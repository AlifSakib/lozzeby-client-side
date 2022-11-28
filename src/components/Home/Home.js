import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseProducts from "../Home/AdvertiseProducts";
import Banner from "./Banner";
import Cta from "./Cta";
import ProductCategories from "./ProductCategories";
import Testimonial from "./Testimonial";

const Home = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://lozzeby-server-side.vercel.app/advertise-products"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>

      {products.length > 0 && (
        <AdvertiseProducts products={products}></AdvertiseProducts>
      )}
      <Cta></Cta>
      {/* <Stats></Stats> */}
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
