import { Product } from "@/types";
import Image from "next/image";
import React from "react";

const FlashSaleCard = ({ product }: { product: Product }) => {
  return (
    <div className="">
      <div className="relative">
        <span className="absolute top-0 right-0 z-10">
          <span
            style={{ backgroundColor: "#ff487a" }}
            className="inline-block text-sm  text-white px-2 py-1 rounded-full"
          >
            {product.discount}% Off
          </span>
        </span>

        <div className="relative">
          <img
            className="transition duration-700 hover:scale-110 w-full"
            src={product.image}
            alt="product image"
          />

          <div className="absolute mb-10 bottom-0 left-0 right-0 pl-10 py-4">
            <h1 className=" text-sky-500 text-xl hover:text-black font-semibold">
              {product.name}
            </h1>
            <p style={{ color: "#ff487a" }}>{product.category.length} Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
