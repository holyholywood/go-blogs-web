import React from "react";
import TopNavigationMenu from "./molecules/TopNavigationMenu";

const TopNavigation = () => {
  return (
    <div className="h-16 flex gap-8 px-4 sticky top-0 border-b dark:border-white bg-white dark:bg-dark">
      <TopNavigationMenu />
    </div>
  );
};

export default TopNavigation;
