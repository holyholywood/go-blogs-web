"use client";
import AppConfig from "@/config/app-config";
import cookie from "@/lib/helpers/cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { RiLogoutBoxRLine, RiSearchLine } from "react-icons/ri";

const SideActionMenu = () => {
  const router = useRouter();

  function handleLogout() {
    cookie.delete(AppConfig.ACCESS_TOKEN_KEY);
    router.push("/signin");
  }
  return (
    <>
      <li>
        <button disabled onClick={handleLogout} className={`w-full flex items-center gap-2 text-dark-light dark:text-gray-50  py-2 pl-2`}>
          <RiSearchLine className="text-xl" />
          Cari
        </button>
      </li>
      <li>
        <button onClick={handleLogout} className={`w-full flex items-center gap-2 text-dark-light dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-dark-hover py-2 pl-2`}>
          <RiLogoutBoxRLine className="text-xl" />
          Keluar
        </button>
      </li>
    </>
  );
};

export default SideActionMenu;
