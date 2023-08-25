"use client";
import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { RiMenuFill, RiSearchLine } from "react-icons/ri";
import { createPortal } from "react-dom";
import Link from "next/link";
import Divider from "../atoms/Divider";

const SmallScreenMenu = ({ isLogin }: { isLogin: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document) {
      setIsReady(true);
    }
  }, []);
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="text-xl h-fit w-fit my-auto hover:bg-dark-light/10 md:hidden">
        <RiMenuFill />
      </Button>
      {isReady &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed w-screen h-screen flex justify-start top-16 items-center z-[55] md:hidden ${isOpen ? "translate-0" : "-translate-x-[100vh]"} duration-500`}
          >
            <aside onClick={(e) => e.stopPropagation()} className="bg-white max-w-sm w-full h-full px-4 py-8 text-sm flex flex-col">
              <h1 className="text-lg font-semibold">Menu</h1>
              <ul>
                <li>
                  <Link href={"/"} className="py-2 flex justify-center gap-2 items-center hover:bg-dark-light/25 rounded duration-300">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href={"/profile"} className="py-2 flex justify-center gap-2 items-center hover:bg-dark-light/25 rounded duration-300">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link href={"/settings"} className="py-2 flex justify-center gap-2 items-center hover:bg-dark-light/25 rounded duration-300">
                    Pengaturan
                  </Link>
                </li>
                <li className="my-4">
                  <Divider />
                </li>
                <li>
                  <Link href={"/"} className="py-2 flex justify-center gap-2 items-center hover:bg-dark-light/25 rounded duration-300">
                    <RiSearchLine /> Cari
                  </Link>
                </li>
                {isLogin && (
                  <li>
                    <Link href={"/"} className="py-2 flex justify-center gap-2 items-center hover:bg-dark-light/25 rounded duration-300 text-rose-400">
                      Keluar
                    </Link>
                  </li>
                )}
              </ul>
              <Button btnType="rounded" className="bg-primary mx-auto mt-[50vh] text-white hover:bg-primary-hover">
                Tulis Post
              </Button>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
};

export default SmallScreenMenu;
