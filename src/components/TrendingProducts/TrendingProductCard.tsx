import { Product } from "@/types";
import { Star } from "lucide-react";
import React from "react";

const TrendingProductCard = ({
  trendingProduct,
}: {
  trendingProduct: Product;
}) => {
  return (
    <div>
      <div className=" border border-light rounded-sm">
        <div>
          <span className="absolute top-0 right-0 z-10">
            <span
              style={{ backgroundColor: "#ff487a" }}
              className="inline-block text-sm  text-white px-2 py-1 rounded-full"
            >
              {trendingProduct.discount}% Off
            </span>
          </span>
        </div>
        <figure className="  ">
          <img
            className="transition duration-700 hover:scale-90 w-full"
            src={trendingProduct.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-sm font-bold ">{trendingProduct.name}</h2>
          <div className="flex justify-center text-orange-500  font-bold">
            {trendingProduct.rating}
            <Star className="w-3 " />
          </div>
          <p style={{ color: "#ff487a" }} className="text-sm font-bold">
            {trendingProduct.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
