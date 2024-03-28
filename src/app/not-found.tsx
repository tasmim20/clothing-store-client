import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" flex justify-center items-center">
      <Image
        src="/404 Error with a cute animal.gif"
        alt="Example Image"
        width={700}
        height={100}
      />
    </div>
  );
};

export default NotFoundPage;
