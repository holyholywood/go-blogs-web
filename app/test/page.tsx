import React from "react";
import Brand from "../components/Brand";

const PageTest = () => {
  return (
    <div className="w-full flex min-h-[200vh]">
      <div className="bg-red-500 max-w-xl w-full  h-screen sticky top-0">
        <div className="bg-green-500 max-w-sm ml-auto">
          <div className="h-16 flex items-center justify-center">
            <Brand className="text-xl mx-auto w-fit" />
          </div>
        </div>
      </div>
      <div className="bg-blue-500 w-full h-screen max-w-4xl">
        <div className="h-16 flex gap-8 items-center px-4 sticky top-0 border-b">
          <ul className="flex text-lg gap-8">
            <li>Beranda</li>
            <li>Postingan Anda</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTest;
