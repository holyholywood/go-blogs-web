import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import AppConfig from "@/config/app-config";
import Link from "next/link";
import Brand from "../components/Brand";

export const metadata: Metadata = {
  title: "Register" + AppConfig.PAGE_TITLE_APP_NAME,
};
const RegisterPage = () => {
  return (
    <main className="flex min-h-screen gap-4 ">
      <div className="w-2/3 flex flex-col items-center justify-center gap-10 border-r">
        <Image src="/assets/img/come-in.png" alt="Come In Illustrations" width={350} height={500} />
        <p className="text-center w-1/2 max-w-lg text-dark/50">
          Berbagi pengalaman dan cerita adalah satu dari sekian banyak kegiatan yang selalu kita anggap mudah. Namun, percayalah penyimak ceritamu selalu merasakan hikmah dan manfaatnya. Siapapun
          kamu, mulailah bercerita!
        </p>
      </div>
      <div className="w-1/3 flex flex-col items-center gap-4 md:px-32">
        <div className="flex justify-center items-center h-64">
          <Link href="/">
            <Brand className="text-4xl " />
          </Link>
        </div>
        <h1 className="text-xl font-semibold">Daftar</h1>
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
