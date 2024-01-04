"use client";
import Link from "next/link";
import { useState } from "react";
import { LuChevronRight, LuUser } from "react-icons/lu";

const MENU = [
  { name: "Womens' & Girls' Fashion", icon: LuUser, children: null, link: "#" },
  { name: "Health & Beauty", icon: LuUser, children: null, link: "#" },
  {
    name: "Watches, Bags, Jewellery",
    icon: LuUser,
    children: [
      { name: "Kids bags", children: null, link: "#" },
      { name: "laptop bags & cases", children: null, link: "#" },
      { name: "Luggage", children: null, link: "#" },
      { name: "Travel Bags", children: null, link: "#" },
      { name: "Men's bag", children: null, link: "#" },
      {
        name: "Women's bag",
        children: [
          { name: "Backpacks", link: "#" },
          { name: "Cross Body & shoulder bags", link: "#" },
          { name: "Bag Charms & Accessories", link: "#" },
          { name: "Clutches", link: "#" },
          { name: "Top-Handle Bags", link: "#" },
          { name: "Tote bags", link: "#" },
          { name: "wallets", link: "#" },
        ],
        link: "#",
      },
      { name: "Women's Watches", children: null, link: "#" },
      { name: "Kids Watches", children: null, link: "#" },
      { name: "women's jewellery", children: null, link: "#" },
      { name: "Men's jewellery", children: null, link: "#" },
    ],
    link: "#",
  },
  { name: "men's & Boys' Fashion", icon: LuUser, children: null, link: "#" },
  { name: "Mother & Baby", icon: LuUser, children: null, link: "#" },
  { name: "Electronic Devices", icon: LuUser, children: null, link: "#" },
  { name: "TV & Home Appliances", icon: LuUser, children: null, link: "#" },
  { name: "Electronic Accessories", icon: LuUser, children: null, link: "#" },
  { name: "Groceries", icon: LuUser, children: null, link: "#" },
  { name: "Home & Lifestyle", icon: LuUser, children: null, link: "#" },
  { name: "Sports & Outdoors", icon: LuUser, children: null, link: "#" },
  { name: "Automobile", icon: LuUser, children: null, link: "#" },
  { name: "Computer and laptop", icon: LuUser, children: null, link: "#" },
  { name: "Pet Supplies", icon: LuUser, children: null, link: "#" },
];

const CategoryMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>();
  const [selectedChild, setSelectedChild] = useState<number>();
  return (
    <div
      className="justify-between flex flex-col absolute left-[15.5%] top-0 bg-background w-56 h-full group/menu border-r-2"
      onMouseLeave={() => {
        setSelectedChild(undefined);
        setSelectedMenu(undefined);
      }}
    >
      {MENU.map((menu, index) => {
        return (
          <Link
            href={menu.link}
            onMouseEnter={() => setSelectedMenu(index)}
            key={index}
            className="px-2 flex justify-between items-center hover:text-primary text-sm"
          >
            {menu.name}
            {menu.children ? <LuChevronRight /> : ""}
          </Link>
        );
      })}
      {selectedMenu !== undefined &&
        MENU.length > selectedMenu &&
        MENU[selectedMenu].children && (
          <div className="absolute left-full bg-background w-56 h-full justify-between flex flex-col">
            {MENU[selectedMenu].children?.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  onMouseEnter={() => setSelectedChild(index)}
                  key={index}
                  className="px-2 flex justify-between items-center hover:text-primary text-sm relative"
                >
                  {item.name}
                  {item.children ? <LuChevronRight /> : ""}
                </Link>
              );
            })}
          </div>
        )}
      <div className="absolute left-full w-56">
        <div className="relative">
          {selectedMenu !== undefined &&
            selectedChild !== undefined &&
            MENU[selectedMenu].children &&
            MENU[selectedMenu].children!.length > selectedChild &&
            MENU[selectedMenu].children![selectedChild].children && (
              <div className="absolute left-full bg-background w-56 h-[305px] space-y-2 flex flex-col">
                {MENU[selectedMenu].children![selectedChild].children?.map(
                  (item, index) => {
                    return (
                      <Link
                        href={item.link}
                        key={index}
                        className="px-2 hover:text-primary text-sm relative"
                      >
                        {item.name}
                      </Link>
                    );
                  }
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
