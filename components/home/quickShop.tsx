import { container } from "@/lib/data";
import Link from "next/link";
import { LuChevronRight, LuShoppingBasket } from "react-icons/lu";

const QuickShopItem = [
  {
    name: "Mart",
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
const QuickShop = () => {
  return (
    <div className={`flex my-4 justify-between space-x-2 ${container}`}>
      {QuickShopItem.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="flex items-center justify-between bg-background w-full shadow-sm border border-foreground/30 hover:shadow-foreground rounded-full p-2 text-sm transition-all duration-300 ease-in"
        >
          <div className="flex space-x-1 items-center font-bold">
            <item.icon className="h-10 w-10 rounded-full bg-secondary p-1 text-primary" />
            {item.name}
          </div>
          <LuChevronRight className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
};

export default QuickShop;
