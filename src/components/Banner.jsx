import React from "react";

const Banner = () => {
  return (
    <div className="carousel ">
      <div id="slide1" className="carousel-item border-none rounded-lg md:h-[80vh] relative w-full">
        <img
          src="https://i.ibb.co.com/0nxvj4h/10-1.jpg"
          className="w-full border-none rounded-lg px-5"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item border-none md:h-[80vh] rounded-lg relative w-full">
        <img
          src="https://i.ibb.co.com/4f2bSvL/10-3.jpg"
          className="w-full border-none rounded-lg px-5"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item border-none md:h-[80vh] rounded-lg relative w-full">
        <img className="w-full border-none rounded-lg px-5"
          src="https://i.ibb.co.com/wCjscwL/10-2.png"
          
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
