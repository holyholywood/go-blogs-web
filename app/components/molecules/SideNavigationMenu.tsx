"use client";
import PublicPageMenus from "@/lib/resource/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavigationMenu = ({ isLogin }: { isLogin: boolean }) => {
  const pathName = usePathname();
  return (
    <>
      {PublicPageMenus.filter((menu) => (isLogin ? menu.url !== "/" : menu.url !== "/profile" && menu.url !== "/")).map((menu, index) => {
        const Icon = menu.icon;
        const isActive = pathName === menu.url;
        return (
          <li key={index} className="">
            <Link
              className={`flex items-center gap-2 ${isActive ? "text-dark dark:text-white" : "text-dark-light dark:text-gray-50"} hover:bg-gray-100 dark:hover:bg-dark-hover py-2 pl-2`}
              href={menu.url}
            >
              <Icon className="text-xl" />
              {menu.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SideNavigationMenu;
