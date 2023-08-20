import AppConfig from "@/config/app-config";
import { Metadata } from "next";
import Brand from "./components/Brand";

export const metadata: Metadata = {
  title: "Beranda" + AppConfig.PAGE_TITLE_APP_NAME,
};
export default function Home() {
  return (
    <main className="w-full bg-white max-w-6xl mx-auto min-h-screen flex ">
      <aside className="max-w-sm w-full  sticky top-0 h-screen">
        <div className="h-16 flex items-center justify-center">
          <Brand className="text-xl mx-auto w-fit" />
        </div>
      </aside>
      <section className="max-w-3xl w-full min-h-screen border-x">
        <div className="h-16 flex gap-8 items-center px-4 sticky top-0 border-b">
          <ul className="flex text-lg gap-8">
            <li>Beranda</li>
            <li>Postingan Anda</li>
          </ul>
        </div>
        <div className="min-h-screen  w-full">s</div>
      </section>
    </main>
  );
}
