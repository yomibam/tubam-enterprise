import React from "react";
import productsImg from "../assets/products-img.png";

export default function Hero() {
  const HandleOrderClick = () => {
    return (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/2348035647633?text=Hello,%20I'd%20like%20to%20place%20an%20order.`,
        "_blank",
        "noopener",
        "noreferrer"
      );
    };
  };
  return (
    <div className="flex flex-col items-center gap-7 px-5 pb-[70px] lap:flex-row lap:px-[100px]">
      <div className="flex flex-col items-center px-8 text-center gap-7 lap:items-start ">
        <h1 className="text-lg font-bold lap:text-xlg lap:text-left">
          Happy Home
        </h1>
        <h2 className="text-sm text-center lap:text-xl lap:text-left">
          The number one multipurpose soap for all Nigerian homes.
        </h2>
        <button
          onClick={HandleOrderClick()}
          className="cursor-pointer text-sm font-bold text-white border bg-primary rounded-[10px] px-[15px] py-[10px] lap:text-xl"
        >
          Order Now
        </button>
      </div>

      <img src={productsImg} alt="products" className="w-[100%] lap:w-[50%]" />
    </div>
  );
}
