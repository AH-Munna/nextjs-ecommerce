import { SaleItems, saleDiscount } from "@/lib/data";
import ProductCards from "../ui/productCards";
import SaleNav from "./saleNav";

const Flashsale = () => {
  return (
    <div className={`px-4 md:px-32 xl:px-60`}>
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
