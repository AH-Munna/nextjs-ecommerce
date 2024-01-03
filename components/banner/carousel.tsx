"use client";
import { TBanners } from "@/app/page";
import Image from "next/image";
import { useState } from "react";

// it is possible to animate the carousel using framer-motion or tailwind-animate if given more time
const Carousel = ({ banners }: { banners: TBanners }) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Image
        src={banners[selected].image}
        alt={banners[selected].title}
        width={1920}
        height={600}
        className="w-full object-cover"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-0.5">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 ${
              selected === index ? "bg-primary" : "bg-primary-foreground"
            }`}
            onClick={() => setSelected(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Carousel;
