import { Product } from "@/types";

import React from "react";
import ViewDetail from "../ViewDetail";
import Image from "next/image";

const AllProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className=" border border-light rounded-sm">
        <figure className="  ">
          <Image
            width={200}
            height={200}
            className=" w-full p-2 rounded-lg transition duration-700 hover:scale-105 "
            src={product.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body -mt-5">
          <h2 className="font-bold ">{product.name}</h2>
          <h2 className=" text-sm  hover:text-black">{product.description}</h2>
          <p style={{ color: "#ff487a" }} className="text-sm font-bold">
            {product.price}$
          </p>
          <ViewDetail productId={product._id} />
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
