"use client";
import Link from "next/link";
import React from "react";

const ViewDetail = ({ productId }: { productId: string }) => {
  return (
    <div>
      <Link
        href={`/kids-wear/${productId}`}
        className="btn"
        onClick={() => {
          console.log("view detail");
        }}
      >
        View Detail
      </Link>
    </div>
  );
};

export default ViewDetail;
