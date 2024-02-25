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
          Tubams Enterprise is a leading manufacturer based in Ogun State,
          Nigeria, specializing in home and office cleaning, and care solutions.
          Tubams produces a range of high-quality products including liquid
          soaps, hair fresheners, hand sanitizers, and bleach. Our mission is to
          provide effective and affordable cleaning and care solutions that meet
          the diverse needs of households and businesses. Backed by a team of
          skilled professionals and state-of-the-art facilities, Tubams
          Enterprise is dedicated to ensuring cleanliness and hygiene in homes
          and workplaces across Nigeria.
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
