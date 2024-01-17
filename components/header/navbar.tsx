import Image from "next/image";
import Link from "next/link";
import { LuHeart, LuSearch, LuShoppingCart, LuUser2 } from "react-icons/lu";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <nav
      className={`px-4 md:px-32 xl:px-60 py-2 flex space-x-4 items-center bg-popover`}
    >
      {/* logo */}
      <Image src={"/logo.png"} alt="ecommerce logo" width={100} height={100} />
      {/* search */}
      <div className="flex w-full items-center">
        <Input placeholder="Search Product" className="rounded-r-none" />
        <LuSearch className="w-12 h-10 bg-primary p-2 rounded-r-md text-primary-foreground" />
      </div>
      {/* icons */}
      <div className="flex space-x-1 items-center">
        <LuUser2 className="h-7 w-7 bg-secondary p-1 rounded-md text-secondary-foreground/80" />
        <LuHeart className="h-7 w-7 bg-secondary p-1 rounded-md text-secondary-foreground/80" />
        <LuShoppingCart className="h-7 w-7 bg-secondary p-1 rounded-md text-secondary-foreground/80" />
      </div>
      {/* cloud service */}
      <Link href="#">
        <Image src={"/cloud-service.png"} alt="user" width={250} height={50} />
      </Link>
    </nav>
  );
};

export default Navbar;
