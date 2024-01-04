// most of the data will come from the api
import { LuShoppingBasket } from "react-icons/lu";

export const data = {
  helpline: "091-42978094",
};

export const QuickShopItem = [
  {
    name: "Alzaf Mart",
    icon: LuShoppingBasket,
    link: "#",
  },
  {
    name: "Fashion",
    icon: LuShoppingBasket,
    link: "#",
  },
  {
    name: "Beauty & Glamour",
    icon: LuShoppingBasket,
    link: "#",
  },
  {
    name: "Home Makeover",
    icon: LuShoppingBasket,
    link: "#",
  },
  {
    name: "Free Delivery",
    icon: LuShoppingBasket,
    link: "#",
  },
];

// below items should be from db
export const saleDiscount = 22; // in percent
export const SaleItems = [
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
