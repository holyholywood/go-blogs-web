"use client";

import AuthService, { registerFormData } from "@/services/authentication-service";
import { VscLoading } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [registerData, setRegisterData] = useState<registerFormData>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <form
      className="w-full max-w-sm space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await AuthService.register(registerData);
        if (!response.status) {
          setErrMessage(response.message);
          setIsLoading(false);
        } else {
          setSuccessMessage(response.message);
          await new Promise((resolve) => setTimeout(resolve, 3000));
          router.push("/signin");
        }
      }}
    >
      {errMessage && <div className="bg-rose-100 text-rose-600 border border-rose-600 rounded text-center py-4">{errMessage}</div>}
      {successMessage && <div className="bg-lime-100 text-lime-600 border border-lime-600 rounded text-center py-4">{successMessage}</div>}
      <div className="space-y-2  w-full">
        <label htmlFor="identity" className="block">
          Nama
        </label>
        <input
          value={registerData.name}
          onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
          type="text"
          id="identity"
          className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1"
        />
      </div>
      <div className="space-y-2  w-full">
        <label htmlFor="identity" className="block">
          Username
        </label>
        <input
          value={registerData.username}
          onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
          type="text"
          id="identity"
          className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1"
        />
      </div>
      <div className="space-y-2  w-full">
        <label htmlFor="identity" className="block">
          Email
        </label>
        <input
          value={registerData.email}
          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
          type="email"
          id="identity"
          className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1"
        />
      </div>
      <div className="space-y-2 w-full">
        <label htmlFor="password" className="block">
          Password
        </label>
        <i className="fi fi-rr-square-right"></i>
        <input
          value={registerData.password}
          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          type="password"
          id="password"
          className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1"
        />
      </div>

      <div className="space-y-8 w-full ">
        <div className="flex items-center gap-2 justify-center">
          <span className="text-sm">Sudah punya akun? </span>
          <Link href="/signin" className="text-sm text-primary hover:text-sky-700 hover:underline font-light block w-fit">
            {" "}
            Masuk
          </Link>
        </div>
        <button disabled={isLoading} className="bg-primary hover:bg-primary-hover disabled:bg-primary-disabled duration-200 text-white px-4 py-1.5 rounded w-full">
          {isLoading ? <VscLoading className="animate-spin mx-auto text-2xl" /> : "Daftar"}{" "}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
