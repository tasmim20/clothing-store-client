import CountdownTimer from "@/components/FlashSale/CountDownTimer";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://chutti-clothing-server.vercel.app/api/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();
  // console.log("product", products);
  return (
    <div className="w-[90%] mx-auto mb-20">
      <CountdownTimer />
      <h1 style={{ color: "#ff487a" }} className="text-4xl font-bold mt-10">
        All Flash Sale Products
      </h1>

      <div className="grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-10 gap-20 ">
        {products.map((product: Product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
