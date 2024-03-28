import { Product } from "@/types";
import React from "react";

const AllProductPage = async () => {
  const res = await fetch(
    "https://chutti-clothing-server.vercel.app/api/kids-wear"
  );
  const products = await res.json();

  return (
    <div className="w-[90%] mx-auto mb-20">
      <h1
        style={{ color: "#ff487a" }}
        className="text-4xl font-bold mt-20 text-center"
      >
        kids Wear Items
      </h1>

      <div className=" mt-10 ">
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Brand</th>
                <th>Rating</th>
                <th>Price$</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {products?.length !== 0 &&
                products?.map((product: Product) => (
                  <tr key={product._id}>
                    <th></th>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.rating}</td>
                    <td style={{ color: "#ff487a" }} className="text-xs ">
                      {product.price}$
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* {products.map((product: Product) => (
          <AllProductTable
            key={product._id}
            product={product}
          ></AllProductTable>
        ))} */}
      </div>
    </div>
  );
};

export default AllProductPage;
