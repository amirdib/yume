"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useStickyEffect } from "../hooks/useStickyEffect";

export default function Home() {
  return (
    <div className="flex flex-col items-strech">
      <div className="flex flex-col align-stretch border-solid">
        <Header />
        <MainTitle />
      </div>
      <DreamImage />
    </div>
  );
}

const Header = () => {
  const { isSticky, elementRef } = useStickyEffect(0.4);
  const backgroundColor = isSticky ? "bg-white" : "bg-[#FF0606]";
  const textColor = isSticky ? "text-black" : "text-white";

  return (
    <div
      ref={elementRef}
      className={`flex flex-col justify-between self-stretch h-[9vh] sticky top-0 ${backgroundColor} z-10 self-center transition-colors duration-500 ease-in-out`}
    >
      <div className="flex flex-row justify-stretch items-center grow-[1] align-center font-bold px-12 gap-4">
        <div>
          <Link
            href="https://www.amirdib.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Amir DIB
          </Link>
        </div>
        <div>
          <Link
            href="https://twitter.com/openadb"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>
      <div
        className={`text-4xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${textColor} font-bold`}
      >
        夢
      </div>
      <Line lineColor="black" />
    </div>
  );
};

const MainTitle = () => {
  return (
    <div
      id="mainTitle"
      className="flex text-[22rem] leading-[21rem] mb-[3rem] font-title font-bold z-20 self-center uppercase tracking-[-0.01em]"
    >
      YUME
    </div>
  );
};

type LineProps = {
  lineColor?: string;
};

const Line: React.FC<LineProps> = ({ lineColor }) => {
  return (
    <div className="flex self-stretch bg-white">
      <hr
        style={{
          background: lineColor,
          height: "2px",
          border: "none",
          width: "100%",
        }}
      />
    </div>
  );
};

const DreamImage = () => {
  const [imageNumber, setImageNumber] = useState(3);
  return (
    <>
      <div className="  h-[91vh] mx-12 relative z-1">
        <a
          href="#yume"
          onClick={() => {
            setImageNumber(Math.floor(Math.random() * 4) + 1);
          }}
        >
          <Image
            src={`/image_${imageNumber}.png`}
            alt="Picture of a paradisiac beach"
            fill
            style={{ objectFit: "cover" }}
          />
        </a>
      </div>
    </>
  );
};
