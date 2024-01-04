import { QuickShopItem } from "@/lib/data";
import Link from "next/link";

const QuickshopMobile = () => {
  return (
    <div className={`grid grid-cols-5 gap-1 my-4 px-2`}>
      {QuickShopItem.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="h-10 w-10 rounded-full bg-background p-2 text-primary border-2 border-background shadow-sm shadow-foreground" />
          <p className="text-xs text-center font-bold mt-2">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default QuickshopMobile;
