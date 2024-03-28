import AllProductCard from "@/components/ProductCard/AllProductCard";
import { Product } from "@/types";
import React from "react";

const AllProductPage = async () => {
  const res = await fetch(
    "https://chutti-clothing-server.vercel.app/api/kids-wear",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();

  return (
    <div className="w-[90%] mx-auto mb-20">
      <h1
        style={{ color: "#ff487a" }}
        className="text-4xl font-bold mt-20 text-center mb-5"
      >
        All kids Wear Itemsssss
      </h1>

      <div className="grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-10 gap-20 ">
        {products.map((product: Product) => (
          <AllProductCard key={product._id} product={product}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;
