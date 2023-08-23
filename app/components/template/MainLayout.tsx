import React from "react";
import SideNavigation from "../SideNavigation";
import TopNavigation from "../TopNavigation";
import Footer from "../organisms/Footer";
type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};
const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <>
      <main className="w-full bg-white max-w-6xl mx-auto min-h-screen flex ">
        <SideNavigation />
        <section className="max-w-3xl w-full min-h-screen border-x">
          <TopNavigation />
          <div className={`min-h-screen  w-full pt-8 px-4 ${className}`}>{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
