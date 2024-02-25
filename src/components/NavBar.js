import React from "react";
import siteLogo from "../assets/tubams-logo .png";

export default function NavBar() {
  const HandleContactClick = () => {
    return (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/2348035647633?text=Hello,%20I'd%20like%20to%20make%20some%20enquires.`,
        "_blank",
        "noopener",
        "noreferrer"
      );
    };
  };
  return (
    <div className="flex justify-center py-[60px] lap:justify-between lap:px-[100px]">
      <img src={siteLogo} alt="site logo" className="w-[100px]" />
      <button
        onClick={HandleContactClick()}
        className="cursor-pointer hidden text-sm font-bold text-white border bg-primary rounded-[10px] px-[15px] py-[10px] lap:block"
      >
        Contact Us
      </button>
    </div>
  );
}
