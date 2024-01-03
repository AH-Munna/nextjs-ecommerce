import { container } from "@/lib/data";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import ProductCards from "../ui/productCards";
import CountDown from "./count";

// below items should be from db
const saleDiscount = 22; // in percent
const SaleItems = [
  {
    id: "1",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/3.jpg",
  },
  {
    id: "2",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/2.png",
  },
  {
    id: "3",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/4.jpg",
  },
  {
    id: "4",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/1.png",
  },
  {
    id: "5",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/3.jpg",
  },
  {
    id: "6",
    name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
    price: 19900,
    discount: 10,
    image: "/assets/products/4.jpg",
  },
];
export type TSaleItems = typeof SaleItems;

const Flashsale = () => {
  return (
    <div className={`${container}`}>
      <SaleNav />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-popover p-4">
        {SaleItems.map((item) => {
          return (
            <ProductCards item={item} key={item.id} discount={saleDiscount} />
          );
        })}
      </div>
    </div>
  );
};

export default Flashsale;

const SaleNav = () => {
  return (
    <div className="w-full bg-popover rounded-md p-4">
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex justify-between">
          <h3 className="text-2xl font-semibold text-primary">FlashSale</h3>
          <div className="flex space-x-4 items-center">
            <p className="font-semibold text-lg">Ending in</p>
            <CountDown />
          </div>
        </div>
        <Link
          href={"#"}
          className="text-primary flex space-x-1 items-center text-lg font-semibold hover:underline"
        >
          <span>See More</span> <LuChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};
