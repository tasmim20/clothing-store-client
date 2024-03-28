import { Product } from "@/types";
import React from "react";
import FlashSaleCard from "./FlashSaleCard";
import Link from "next/link";

const FlashSale = ({ products }: { products: Product[] }) => {
  return (
    <div className=" w-[95%] mx-auto my-20 ">
      <h1 className="text-4xl my-10">Latest Flash Sale Products</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {products &&
          products
            .slice(0, 5)
            .map((product) => (
              <FlashSaleCard product={product} key={product._id} />
            ))}
      </div>

      <div className="flex justify-center items-center mx-auto my-10">
        {" "}
        <Link
          href="/flash-sale"
          className="btn w-[20%]  bg-sky-400 rounded-full mb-5   text-white font-bold  hover:bg-red-400"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
