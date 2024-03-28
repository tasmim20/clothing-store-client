import { Product } from "@/types";
import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import Link from "next/link";

const TrendingProducts = ({
  trendingProducts,
}: {
  trendingProducts: Product[];
}) => {
  return (
    <div className=" w-[95%] mx-auto my-20 ">
      <h1 className="text-4xl my-10">Top Most Trending Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {trendingProducts &&
          trendingProducts
            .slice(0, 6)
            .map((trendingProduct) => (
              <TrendingProductCard
                trendingProduct={trendingProduct}
                key={trendingProduct._id}
              />
            ))}
      </div>
      <div className="flex justify-center items-center mx-auto my-10">
        {" "}
        <Link
          href="/kids-wear"
          className="btn w-[20%]  bg-sky-400 rounded-full mb-5   text-white font-bold  hover:bg-red-400"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default TrendingProducts;
