import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import CountDown from "./count";

const SaleNav = () => {
  return (
    <div className="w-full bg-popover rounded-t-md p-4">
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex justify-between">
          <h3 className="text-2xl font-semibold text-primary">FlashSale</h3>
          <div className="flex space-x-1 md:space-x-4 items-center">
            <p className="font-semibold text-lg hidden md:block">Ending in</p>
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

export default SaleNav;
