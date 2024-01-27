import React from "react";
import fb from "../assets/Facebook.png";
import whatsapp from "../assets/WhatsApp.png";
import ig from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";

export default function About() {
  return (
    <div className="flex flex-col gap-[10px] px-[20px] mt-[70px] lap:flex-row lap:px-[50px]">
      <div className="bg-secondary p-[20px] lap:w-full lap:px-[50px] py-[30px]">
        <h3 className="text-base font-bold lap:text-xxl">About us</h3>
        <p className="lap:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          eleifend lectus, in vestibulum nisi. Maecenas odio nisl, sodales quis
          nulla non, rutrum malesuada mauris. Morbi justo eros, pulvinar id
          molestie eleifend, lobortis at orci. Curabitur molestie fermentum
          ultrices. Sed quis cursus massa, in dictum massa. Donec quis vehicula
          sem. Ut non libero nulla. Nam nec condimentum justo. Cras id nisl sit
          amet elit suscipit ornare ut in mi. Nunc et tincidunt mauris. Sed
          rhoncus sem eget fermentum aliquam.
        </p>
      </div>
      <div className="flex flex-col gap-[15px] px-[20px] py-[30px] lap:w-full">
        <h3 className="text-base font-bold lap:text-xxl">Contact</h3>
        <span className="font-bold text-[20px] lap:text-[24px]">Phone no</span>
        <span className="lap:text-xl">+234 803 564 7633</span>
        <span className="font-bold text-[20px] lap:text-[24px]">Email</span>
        <span className="lap:text-xl">tubamsenterprise@gmail.com</span>
        <span className="font-bold text-[20px] lap:text-[24px]">Follow us</span>
        <div className="flex gap-[30px] lap:gap-[10px]">
          <a
            href="https://wa.me/2348035647633"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="whatsapp link"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077811573261&mibextid=ZbWKwL"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="facebook link" className="w-[40px] h-[40px]" />
          </a>
          <a
            href="https://instagram.com/tubamsenterprise"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="instagram link" className="w-[40px] h-[40px]" />
          </a>
          <a
            href="https://twitter.com/tubamsenterpris"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitter link"
              className="w-[40px] h-[40px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
