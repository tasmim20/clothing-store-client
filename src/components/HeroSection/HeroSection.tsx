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
          <div className="absolute inset-0 grid grid-cols-2 justify-center items-center overflow-hidden">
            <div></div>
            <div>
              <h1 className=" lg:text-4xl text-2xl  font-bold">
                For Little Champs
              </h1>{" "}
              <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 lg:text-5xl text-3xl font-extrabold"
              >
                Summer Collection
              </h1>{" "}
              <br />
              <h1 className=" lg:text-xl text-sm ">
                Flat 10% off on order above $59.49
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full lg:px-10 px-5 lg:text-xl text-sm lg:mt-5 mt-2"
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
          <div className="absolute inset-0 grid grid-cols-2  justify-center items-center  overflow-hidden">
            <div></div>
            <div>
              <h1 className=" lg:text-4xl text-2xl  font-bold">
                Special Kids Offer
              </h1>{" "}
              <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 lg:text-5xl text-3xl font-extrabold"
              >
                Big Discount
              </h1>{" "}
              <br />
              <h1 className=" lg:text-xl text-sm ">
                Celebrate New Year 20% offer on latest Model
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#fe53bb" }}
                  className="btn btn-active text-white rounded-full lg:px-10 px-5 lg:text-xl text-sm lg:mt-5 mt-2"
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
          <div className="absolute inset-0 grid lg:grid-cols-2 grid-cols-1  justify-start items-center pl-36  overflow-hidden ">
            <div>
              <h1 className=" lg:text-4xl text-2xl font-bold">
                Princess Dresses
              </h1>{" "}
              <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 lg:text-5xl text-3xl font-extrabold"
              >
                Kids Shopping
              </h1>{" "}
              <br />
              <h1 className=" lg:text-xl text-sm ">
                Huge Offer up to 70% on baby clothes
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full lg:px-10 px-5 lg:text-xl text-sm lg:mt-5 mt-2"
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
          <div className="absolute inset-0 grid grid-cols-2  justify-center items-center  overflow-hidden">
            <div></div>
            <div>
              <h1 className=" lg:text-4xl text-2xl  font-bold">
                For Little Champs
              </h1>{" "}
              <br />
              <h1
                style={{ color: "#90649b" }}
                className="text-violet-700 lg:text-5xl text-3xl font-extrabold"
              >
                Summer Collection
              </h1>{" "}
              <br />
              <h1 className=" lg:text-xl text-sm ">
                Flat 10% off on order above $59.49
              </h1>
              <h1>
                <button
                  style={{ backgroundColor: "#11d6e1" }}
                  className="btn btn-active text-white rounded-full lg:px-10 px-5 lg:text-xl text-sm lg:mt-5 mt-2"
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
