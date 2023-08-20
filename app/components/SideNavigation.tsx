import React from "react";
import Brand from "./Brand";
import Button from "./atoms/Button";
import { RiPencilLine } from "react-icons/ri";
import RouterLink from "./atoms/RouterLink";
import SideNavigationMenu from "./molecules/SideNavigationMenu";
const SideNavigation = () => {
  return (
    <aside className="max-w-xs w-full  sticky top-0 h-screen space-y-8">
      <div className="h-16 flex items-center justify-center">
        <Brand className="text-2xl mx-auto w-fit" />
      </div>
      <ul className="pl-4">
        <SideNavigationMenu />
      </ul>
      <div className="absolute bottom-20 w-full">
        <RouterLink href="/posts/write" linkType="button-rounded" className="mx-auto bg-primary text-white">
          <RiPencilLine />
          Tulis Postingan
        </RouterLink>
      </div>
    </aside>
  );
};

export default SideNavigation;
