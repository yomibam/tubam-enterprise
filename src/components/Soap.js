import React from "react";
import soapData from "../data/soapData";

export default function Soap() {
  const HandleSoapClick = (soapInfo) => {
    return (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/2348035647633?text=Hello,%20I'd%20like%20to%20place%20an%20order%20for%20${soapInfo.name},%20${soapInfo.volume}.`,
        "_blank",
        "noopener",
        "noreferrer"
      );
    };
  };

  const DisplaySoaps = () => {
    return soapData.map((soap) => (
      <div
        key={soap.id}
        onClick={HandleSoapClick(soap)}
        className="flex flex-col items-center cursor-pointer"
      >
        <div className="w-[150px] h-[150px] overflow-hidden bg-white lap:w-[300px] lap:h-[300px]">
          <img
            src={require(`../assets/${soap.img_url}`)}
            alt={soap.name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <span className="font-bold text-sm pt-[10px] lap:text-xl">
          {soap.name}
        </span>
        <span className="text-sm font-normal lap:text-xl">{soap.volume}</span>
        <span className="text-sm font-bold text-primary lap:text-xl">
          #{soap.price}
        </span>
      </div>
    ));
  };
  return (
    <div className="flex items-center flex-col bg-secondary py-[20px] px-[10px] gap-[10px] lap:mt-24 lap:gap-8">
      <h2 className="text-base font-bold lap:text-xxl">Multipurpose Soap</h2>
      <div
        className="flex flex-wrap items-center justify-center gap-[20px] lap:justify-between lap:pl-[10px]lap:gap-[80px]
      lap:px-[100px]"
      >
        {DisplaySoaps()}
      </div>
    </div>
  );
}
