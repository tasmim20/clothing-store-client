"use client";
import CategorySection from "@/components/CategorySection/CategorySection";
import FlashSale from "@/components/FlashSale/FlashSale";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import React from "react";

const page = async () => {
  //flash sale products
  const res = await fetch("http://localhost:5000/api/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  // console.log("product", products);

  //category
  const res3 = await fetch("http://localhost:5000/api/kids-wear", {
    next: {
      revalidate: 30,
    },
  });
  const categoryProducts = await res3.json();
  // console.log(categoryProducts);

  //trending products
  const res2 = await fetch("http://localhost:5000/api/trending-product", {
    next: {
      revalidate: 30,
    },
  });
  const trendingProducts = await res2.json();
  // console.log(trendingProducts);

  return (
    <div>
      <HeroSection />
      <FlashSale products={products} />
      <CategorySection categoryProducts={categoryProducts} />
      <TrendingProducts trendingProducts={trendingProducts} />
    </div>
  );
};

export default page;
