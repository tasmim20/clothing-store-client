import Image from "next/image";
import backgroundImage from "../../../public/slider-3.jpg"; // adjust the path accordingly

import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/slider-3.jpg"
            alt="Example Image"
            width={3000}
            height={800}
          />
          <div className="absolute inset-0 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
            <div></div>
            <div>
              <h1 className=" text-4xl  font-bold">For Little Champs</h1> <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 text-5xl font-extrabold"
              >
                Summer Collection
              </h1>{" "}
              <br />
              <h1 className=" text-xl ">Flat 10% off on order above $59.49</h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full px-10 text-xl mt-5"
                >
                  Shop now
                </button>
              </h1>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/slider-1.jpg"
            alt="Example Image"
            width={3000}
            height={800}
          />
          <div className="absolute inset-0 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
            <div></div>
            <div>
              <h1 className=" text-4xl  font-bold">Special Kids Offer</h1>{" "}
              <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 text-5xl font-extrabold"
              >
                Big Discount
              </h1>{" "}
              <br />
              <h1 className=" text-xl ">
                Celebrate New Year 20% offer on latest Model
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#fe53bb" }}
                  className="btn btn-active text-white rounded-full px-10 text-xl mt-5"
                >
                  Shop now
                </button>
              </h1>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/slider-2.jpg"
            alt="Example Image"
            width={3000}
            height={800}
          />
          <div className="absolute inset-0 grid lg:grid-cols-2 grid-cols-1  justify-start items-center pl-36 ">
            <div>
              <h1 className=" text-4xl  font-bold">Princess Dresses</h1> <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 text-5xl font-extrabold"
              >
                Kids Shopping
              </h1>{" "}
              <br />
              <h1 className=" text-xl ">
                Huge Offer up to 70% on baby clothes
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full px-10 text-xl mt-5"
                >
                  Shop now
                </button>
              </h1>
            </div>
            <div></div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/slider-3.jpg"
            alt="Example Image"
            width={3000}
            height={800}
          />
          <div className="absolute inset-0 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
            <div></div>
            <div>
              <h1 className=" text-4xl  font-bold">For Little Champs</h1> <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 text-5xl font-extrabold"
              >
                Summer Collection
              </h1>{" "}
              <br />
              <h1 className=" text-xl ">Flat 10% off on order above $59.49</h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full px-10 text-xl mt-5"
                >
                  Shop now
                </button>
              </h1>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
