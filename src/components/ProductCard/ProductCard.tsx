import { Product } from "@/types";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className=" border border-light rounded-sm">
        <div>
          <span className="absolute top-0 right-0 z-10">
            <span
              style={{ backgroundColor: "#ff487a" }}
              className="inline-block text-sm  text-white px-2 py-1 rounded-full"
            >
              {product.discount}% Off
            </span>
          </span>
        </div>
        <figure className="  ">
          <img
            className=" w-full p-2 rounded-lg transition duration-700 hover:scale-105 "
            src={product.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl ">{product.name}</h2>
          <h2
            style={{ color: "#ff487a" }}
            className=" text-sm  hover:text-black"
          >
            Brand: {product.brand}
          </h2>
          <p className="text-sm">{product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
