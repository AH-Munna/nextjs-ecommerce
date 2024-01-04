import { SaleItems, saleDiscount } from "@/lib/data";
import { LuChevronRight } from "react-icons/lu";
import ProductCardM from "../ui/productCardM";
import SimpleCardM from "../ui/simpleCard";

const FlashSaleMobile = () => {
  return (
    <div className="grid grid-cols-2 px-4 relative">
      <ProductCardM item={SaleItems[0]} discount={saleDiscount} />
      <div className="grid grid-cols-2">
        {SaleItems.slice(0, 4).map((item, index) => (
          <SimpleCardM item={item} discount={saleDiscount} key={index} />
        ))}
      </div>
      <LuChevronRight className="absolute top-1/2 -translate-y-1/2 right-2 text-foreground/30 w-10 h-10 p-2 bg-background/80 rounded-full hover:bg-background shadow-sm hover:shadow-md hover:shadow-foreground cursor-pointer" />
    </div>
  );
};

export default FlashSaleMobile;
