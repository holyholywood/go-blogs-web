"use client";
import Button from "@/app/components/atoms/Button";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.bubble.css";

const WritePostFormQuill = () => {
  const [outputText, setOutputText] = useState<string>("");
  const [withBanner, setWithBanner] = useState<boolean>(true);
  const [isPoem, setIsPoem] = useState<boolean>(false);
  return (
    <div className="space-y-4 pb-8">
      <div className="flex mb-10 w-full justify-between items-center">
        <h1 className="text-2xl w-fit">Tulis Post</h1>{" "}
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="contentType" className="block border-non select-none">
            Banner
          </label>
          <input type="checkbox" id="contentType" className="accent-primary" checked={withBanner} onChange={(e) => setWithBanner(e.target.checked)} />
        </div>
      </div>
      {withBanner && (
        <>
          <label id="banner" className="rounded overflow-hidden block">
            <Image src="https://dummyimage.com/800x250/171715/fefefe&text=-" alt="banner" width={800} height={250} />
            <input type="file" id="banner" className="w-0 h-0 opacity-0" accept=".png,.jpg,.jpeg,.webp" />
          </label>
        </>
      )}
      <div className="space-y-2 w-full">
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="isPoem" className="block">
            Tipe Post
          </label>
          <select
            onChange={(e) => (e.target.value === "poem" ? setIsPoem(true) : setIsPoem(false))}
            value={isPoem ? "poem" : "article"}
            id="isPoem"
            className="bg-white block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1"
          >
            <option value="poem">Puisi</option>
            <option value="article">Artikel</option>
          </select>
        </div>
        <label htmlFor="title" className="block">
          Judul
        </label>
        <input placeholder="Judul Postingan (Opsional)" type="text" id="text" className="w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1" />
      </div>
      <div className="w-full h-fit border border-dark/50 focus:outline-sky-700 rounded">
        <ReactQuill
          placeholder="Apa yang kamu pikirkan?"
          theme={"bubble"}
          className="h-full [&>.ql-container]:min-h-[50vh]"
          id="body"
          onChange={(e) => setOutputText(e)}
          style={{
            minHeight: "10rem",
          }}
        />
      </div>
      <Button
        onClick={() => {
          console.info(outputText);
        }}
        className="bg-primary text-white ml-auto"
      >
        Submit
      </Button>
    </div>
  );
};

export default WritePostFormQuill;
