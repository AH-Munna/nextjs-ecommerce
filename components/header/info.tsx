import { data } from "@/lib/data";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

const NavInfo = () => {
  return (
    <div
      className={`flex flex-wrap justify-between py-1 bg-secondary text-secondary-foreground text-xs px-4 md:px-32 xl:px-60`}
    >
      <div className="flex space-x-4">
        <div className="flex space-x-0.5 cursor-pointer">
          <span>Language</span>
          <div className="flex items-center">
            <LuChevronDown className="h-5 w-5" />
          </div>
        </div>
        <Link className="hover:underline" href="#">
          Help Center
        </Link>
        <Link className="hover:underline" href={`tel:${data.helpline}`}>
          Helpline: {data.helpline}
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link className="hover:underline" href="#">
          Become a Seller
        </Link>
        <Link className="hover:underline" href="#">
          Order Track
        </Link>
        <Link className="hover:underline text-primary" href="#">
          Sign up / Login
        </Link>
      </div>
    </div>
  );
};

export default NavInfo;
