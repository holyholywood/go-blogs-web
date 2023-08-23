"use client";

import AuthService from "@/services/authentication-service";
import { VscLoading } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [identity, setIdentity] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <form
      className="w-full max-w-sm space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await AuthService.login(identity, password);
        if (!response.status) {
          setErrMessage(response.message);
          setIsLoading(false);
        } else {
          window.location.href = "/";
        }
      }}
    >
      {errMessage && <div className="bg-rose-100 text-rose-600 border border-rose-600 rounded text-center py-4">{errMessage}</div>}
      <div className="space-y-2  w-full">
        <label htmlFor="identity" className="block">
          Username / Email
        </label>
        <input value={identity} onChange={(e) => setIdentity(e.target.value)} type="text" id="identity" className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1" />
      </div>
      <div className="space-y-2 w-full">
        <label htmlFor="password" className="block">
          Password
        </label>
        <i className="fi fi-rr-square-right"></i>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1" />
      </div>
      <div className="space-y-8 w-full ">
        <div className="flex items-center justify-between">
          <Link href="/register" className="text-sm text-primary hover:text-sky-700 hover:underline font-light block w-fit">
            Daftar
          </Link>
          <Link href="/forgot-password" className="text-sm text-primary hover:text-sky-700 hover:underline font-light block w-fit">
            Lupa Password
          </Link>
        </div>
        <button disabled={isLoading} className="bg-primary hover:bg-primary-hover disabled:bg-primary-disabled duration-200 text-white px-4 py-1.5 rounded w-full">
          {isLoading ? <VscLoading className="animate-spin mx-auto text-2xl" /> : "Masuk"}{" "}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
