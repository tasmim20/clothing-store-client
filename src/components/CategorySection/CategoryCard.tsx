import { Product } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ categoryProduct }: { categoryProduct: Product }) => {
  return (
    <div className="text-center">
      <div className="border-dotted border-2 border-gray-500 rounded-full mb-5">
        <img
          className="rounded-full  border p-2"
          src={categoryProduct.image}
          alt="product image"
        />
      </div>
      <Link
        href={categoryProduct.category}
        className=" text-black text-xl  hover:text-sky-500 font-semibold"
      >
        {categoryProduct.category}
      </Link>
    </div>
  );
};

export default CategoryCard;
