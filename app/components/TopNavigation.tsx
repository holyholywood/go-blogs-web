import React from "react";
import TopNavigationMenu from "./molecules/TopNavigationMenu";
import Button from "./atoms/Button";
import RouterLink from "./atoms/RouterLink";

const TopNavigation = () => {
  return (
    <div className="h-16 flex gap-8 px-4 sticky top-0 border-b dark:border-white bg-white dark:bg-dark">
      <TopNavigationMenu />
      <div className="ml-auto h-full flex justify-center items-center">
        <RouterLink linkType="button" href="/signin" className="bg-white hover:bg-primary hover:text-white border border-primary text-primary font-semibold">
          Log In
        </RouterLink>
      </div>
    </div>
  );
};

export default TopNavigation;
