import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./components/SignInForm";
import AppConfig from "@/config/app-config";
import Brand from "../components/Brand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In" + AppConfig.PAGE_TITLE_APP_NAME,
};
const SignInPage = () => {
  return (
    <main className="flex min-h-screen gap-4 ">
      <div className="w-1/2 xl:w-2/3 hidden lg:flex flex-col items-center justify-center gap-10 border-r">
        <Image src="/assets/img/blog-view.png" alt="Blog View Illustrations" width={350} height={500} />
        <p className="text-center  max-w-lg text-dark/50">
          Kami percaya bahwa kebebasan berpendapat adalah bagian dari hak hidup manusia. Karena di dalamnya selalu terdapat opini, perasaan dan inspirasi yang setiap kita sebagai manusia dapat bagikan
          sebagai pengetahuan, pembelajaran dan pengalaman.
        </p>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col items-center gap-4 px-4 md:px-32">
        <div className="flex justify-center items-center h-64">
          <Link href="/">
            <Brand className="text-4xl " />
          </Link>
        </div>
        <h1 className="text-xl font-semibold">Masuk</h1>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
