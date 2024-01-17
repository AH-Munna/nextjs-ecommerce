// most of the data will come from the api
import { LuShoppingBasket } from "react-icons/lu";

export const data = {
  helpline: "091-42978094",
};

export const QuickShopItem = [
  {
    name: "Dream Mart",
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
    name: "Stylish Leather Handbag",
    price: 19900,
    discount: 10,
    image: "/assets/products/3.png",
  },
  {
    id: "2",
    name: "Elegant Tote Bag",
    price: 19900,
    discount: 10,
    image: "/assets/products/2.png",
  },
  {
    id: "3",
    name: "Stylish Leather Handbag",
    price: 19900,
    discount: 10,
    image: "/assets/products/4.png",
  },
  {
    id: "4",
    name: "Stylish Leather Handbag",
    price: 19900,
    discount: 10,
    image: "/assets/products/1.png",
  },
  {
    id: "5",
    name: "Elegant Tote Bag",
    price: 19900,
    discount: 10,
    image: "/assets/products/3.png",
  },
  {
    id: "6",
    name: "Stylish Leather Handbag",
    price: 19900,
    discount: 10,
    image: "/assets/products/4.png",
  },
];
export type TSaleItems = typeof SaleItems;
