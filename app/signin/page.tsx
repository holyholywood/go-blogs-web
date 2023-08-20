import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./components/SignInForm";
import AppConfig from "@/config/app-config";

export const metadata: Metadata = {
  title: "Log In" + AppConfig.PAGE_TITLE_APP_NAME,
};
const LoginPage = () => {
  return (
    <main className="flex min-h-screen gap-4 ">
      <div className="w-1/2 flex flex-col items-center justify-center gap-10">
        <Image src="/assets/img/blog-view.png" alt="Blog View Illustrations" width={350} height={500} />
        <p className="text-center w-1/2 max-w-lg text-dark/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, itaque maxime corrupti quibusdam veniam dicta perspiciatis alias excepturi tempora expedita?
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center gap-4 md:px-32">
        <h1 className="text-xl font-semibold">Masuk</h1>
        <SignInForm />
      </div>
    </main>
  );
};

export default LoginPage;
