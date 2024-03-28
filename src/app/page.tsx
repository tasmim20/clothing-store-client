"use client";
import CategorySection from "@/components/CategorySection/CategorySection";
import FlashSale from "@/components/FlashSale/FlashSale";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import React from "react";

const page = async () => {
  //flash sale products
  const res = await fetch(
    "https://chutti-clothing-server.vercel.app/api/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();

  //category
  const res3 = await fetch(
    "https://chutti-clothing-server.vercel.app/api/kids-wear",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const categoryProducts = await res3.json();

  //trending products
  const res2 = await fetch(
    "https://chutti-clothing-server.vercel.app/api/trending-product",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const trendingProducts = await res2.json();

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
