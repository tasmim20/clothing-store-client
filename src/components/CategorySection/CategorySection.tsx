import { Product } from "@/types";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = ({
  categoryProducts,
}: {
  categoryProducts: Product[];
}) => {
  return (
    <div className=" w-[95%] mx-auto my-32 ">
      <h1 className="text-4xl my-10">Shop By Category</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {categoryProducts.length &&
          categoryProducts
            ?.slice(0, 6)
            .map((categoryProduct) => (
              <CategoryCard
                categoryProduct={categoryProduct}
                key={categoryProduct._id}
              />
            ))}
      </div>
    </div>
  );
};

export default CategorySection;
