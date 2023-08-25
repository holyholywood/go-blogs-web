import React from "react";
import Brand from "./Brand";
import { RiPencilLine } from "react-icons/ri";
import RouterLink from "./atoms/RouterLink";
import SideNavigationMenu from "./molecules/SideNavigationMenu";
import Link from "next/link";
import Divider from "./atoms/Divider";
import SideActionMenu from "./molecules/SideActionMenu";
import { cookies } from "next/headers";
import JWT from "@/lib/helpers/jwt";
import { AccessTokenBodyType } from "@/lib/helpers/jwt/jwt";
import AppConfig from "@/config/app-config";
const SideNavigation = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(AppConfig.ACCESS_TOKEN_KEY);
  const user = JWT.serverParse<AccessTokenBodyType>(token?.value as string);
  return (
    <aside className="max-w-xs w-full  sticky top-0 h-[calc(100vh-4rem)] max-h-screen space-y-8 hidden md:block">
      <div className="h-16 flex items-center justify-center">
        <Link href={"/"}>
          <Brand className="text-2xl mx-auto w-fit" />
        </Link>
      </div>
      <ul className="pl-4">
        <SideNavigationMenu />
      </ul>

      {user && (
        <>
          <div className="px-6">
            <Divider />
          </div>
          <ul className="pl-4">
            <SideActionMenu />
          </ul>
        </>
      )}

      <div className="absolute bottom-20 w-full">
        <RouterLink href="/posts/write" linkType="button-rounded" className="mx-auto hover:bg-primary-hover bg-primary text-white">
          <RiPencilLine />
          Tulis Postingan
        </RouterLink>
      </div>
    </aside>
  );
};

export default SideNavigation;
