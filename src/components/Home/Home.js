import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseProducts from "./AdvertiseProducts";
import Banner from "./Banner";
import ProductCategories from "./ProductCategories";

const Home = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise-products");
      const data = await res.json();

      return data;
    },
  });

  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      {products.length > 0 && <AdvertiseProducts></AdvertiseProducts>}
    </div>
  );
};

export default Home;
