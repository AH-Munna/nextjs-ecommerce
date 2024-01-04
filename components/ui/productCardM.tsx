// product card can be SEO friendly and "use client" isn't needed if heart/wishlist is from db
"use client";
import { TSaleItems } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { LuHeart } from "react-icons/lu";

const ProductCardM = ({
  item,
  discount,
}: {
  item: TSaleItems[0];
  discount: number;
}) => {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <div className="cursor-pointer hover:shadow-md hover:shadow-foreground transition-all duration-300 ease-in p-1 rounded-sm">
      <div className="relative">
        <Image src={item.image} alt={item.name} width={300} height={300} />
        <LuHeart
          onClick={() => setWishlisted((prev) => !prev)}
          className={`absolute right-2 top-2 h-7 w-7 p-1 text-background rounded-full bg-foreground/40 ${
            wishlisted ? "fill-background" : ""
          }`}
        />
        <p className="absolute bottom-1 left-1 bg-primary text-primary-foreground px-2 rounded-sm">
          {discount}% off
        </p>
      </div>
      <p className="font-semibold text-base">{item.name}</p>
      <div className="flex space-x-2 mt-1 items-center">
        <p className="text-primary font-bold">
          ৳{" "}
          {discount > 0
            ? item.price - item.price * (discount / 100)
            : item.price}
        </p>
        <p className="line-through">
          {discount > 0 ? "৳ " + item.price * (discount / 100) : ""}
        </p>
      </div>
    </div>
  );
};

export default ProductCardM;
