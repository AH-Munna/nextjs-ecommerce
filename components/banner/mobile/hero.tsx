// "use client"
import { TBanners } from "@/app/page";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
// import { useState } from "react";

const MobileBanner = ({ banners }: { banners: TBanners }) => {
  // const [selected, setSelected] = useState(0)
  return (
    <div className="relative">
      <Image
        src={banners[0].imgSmall}
        alt={banners[0].title}
        width={900}
        height={900}
        className="h-[50vh] object-cover"
      />
      <nav className="absolute top-2 left-1/2 -translate-x-1/2 w-[85vw] flex space-x-4">
        <Input
          placeholder="Search Product"
          className="bg-secondary/20 rounded-3xl text-background placeholder:text-background"
        />
        <LuShoppingCart className="p-1 rounded-full w-10 h-10 bg-secondary/20 text-background" />
      </nav>
    </div>
  );
};

export default MobileBanner;
