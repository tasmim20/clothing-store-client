"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <GridLoader color="#fc6171" />
    </div>
  );
};

export default loading;
