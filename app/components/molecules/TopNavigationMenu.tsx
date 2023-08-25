"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TopNavigationMenuProps = {
  isLogin: boolean;
};
const TopNavigationMenu = ({ isLogin }: TopNavigationMenuProps) => {
  const pathName = usePathname();
  return (
    <ul className="flex md:text-lg font-semibold">
      {topMenu
        .filter((el) => (isLogin ? el : !el.guarded))
        .map((menu, index) => {
          const isActive = pathName === menu.url;
          return (
            <li key={index} className={`h-full`}>
              <Link
                href={menu.url}
                className={`${isActive ? "border-dark" : "border-b-transparent"} px-2 border-b-2 truncate h-full flex items-center duration-300 hover:bg-gray-200 dark:hover:bg-dark-light`}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default TopNavigationMenu;

const topMenu = [
  {
    name: "Beranda",
    url: "/",
    guarded: false,
  },
  {
    name: "Post Saya",
    url: "/posts",
    guarded: true,
  },
];
