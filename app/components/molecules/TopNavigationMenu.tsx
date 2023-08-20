"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopNavigationMenu = () => {
  const pathName = usePathname();
  return (
    <ul className="flex text-lg font-semibold">
      {topMenu.map((menu, index) => {
        const isActive = pathName === menu.url;
        return (
          <li key={index} className={`h-full`}>
            <Link href={menu.url} className={`${isActive ? " border-b-2 " : ""} px-2 border-dark h-full flex items-center duration-300 hover:bg-gray-200 dark:hover:bg-dark-light`}>
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
  },
  {
    name: "Postingan Anda",
    url: "/posts",
  },
];
