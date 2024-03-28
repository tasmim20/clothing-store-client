import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetailPage = async (props: any) => {
  console.log(props.params.productId);
  const res = await fetch(
    `http://localhost:5000/api/kids-wear/${props.params.productId}`
  );
  const { name, image, rating, price, description, brand } = await res.json();

  return (
    <div>
      <div style={{ backgroundColor: "#ffd9dd" }} className="text-center py-5">
        <h2 style={{ color: "#fc6171" }} className="text-5xl font-extrabold">
          Product
        </h2>
        <p className="py-2">All / {name}</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 w-[80%] mx-auto py-20">
        <div>
          <Image width={500} height={700} src={image} alt="product image" />
        </div>
        <div>
          <h2 className="text-5xl font-extrabold">{name}</h2>
          <div className="flex text-orange-300 py-8">
            {" "}
            <Star /> <Star /> <Star /> <Star /> <StarHalf />{" "}
            <span className="font-bold text-xl">{rating}</span>
          </div>
          <p>
            {description} Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Incidunt accusantium tenetur repellat molestias odit,
            repellendus quidem blanditiis voluptatem inventore tempore........
          </p>
          <p style={{ color: "#fc6171" }} className="font-bold text-xl py-8">
            {price}$
          </p>
          <p>
            <span className="font-bold pr-5">Size:</span>{" "}
            <button
              style={{ backgroundColor: "#fc6171" }}
              className="btn rounded-none"
            >
              M
            </button>{" "}
            <button
              style={{ backgroundColor: "#11d6e1" }}
              className="btn rounded-none"
            >
              L
            </button>{" "}
            <button
              style={{ backgroundColor: "#11d6e1" }}
              className="btn rounded-none"
            >
              L
            </button>{" "}
            <button
              style={{ backgroundColor: "#11d6e1" }}
              className="btn rounded-none"
            >
              XL
            </button>{" "}
          </p>
          <p className="py-8">
            <span className="pr-2 font-bold">Availability:</span> 1 In stock{" "}
          </p>
          <p className="pb-10">
            <span className="pr-2 font-bold">Brand:</span> {brand}
          </p>
          <div className="flex">
            {" "}
            <button className="btn w-1/2   bg-sky-400 rounded-full mb-5 text-white font-bold  hover:bg-red-400">
              Add to Cart
            </button>{" "}
            <button className="btn w-1/2   bg-sky-400 rounded-full mb-5 text-white font-bold  hover:bg-red-400">
              Add to wishlist
            </button>
          </div>
          <button className="btn w-full bg-sky-400 rounded-full text-white font-bold hover:bg-red-400">
            Buy It Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
