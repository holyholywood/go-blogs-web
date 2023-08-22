import AppConfig from "@/config/app-config";
import { Metadata } from "next";
import TopNavigation from "./components/TopNavigation";
import SideNavigation from "./components/SideNavigation";

export const metadata: Metadata = {
  title: "Beranda" + AppConfig.PAGE_TITLE_APP_NAME,
};

export default function Home() {
  return (
    <main className="w-full bg-white max-w-6xl mx-auto min-h-screen flex ">
      <SideNavigation />
      <section className="max-w-3xl w-full min-h-screen border-x">
        <TopNavigation />
        <div className="min-h-screen  w-full pt-8 px-4">ss</div>
      </section>
    </main>
  );
}
