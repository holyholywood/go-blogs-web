"use client";
import Button from "@/app/components/atoms/Button";
import Input from "@/app/components/atoms/Input";
import useMediaService from "@/lib/hooks/useUploadMedia";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin5Fill, RiHashtag } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.bubble.css";
import SearchCategory from "./SearchCategory";

const WritePostFormQuill = () => {
  const [outputText, setOutputText] = useState<string>("");
  const [withBanner, setWithBanner] = useState<boolean>(true);
  const [categories, setCategories] = useState<category[]>([]);
  const [isPoem, setIsPoem] = useState<boolean>(false);
  const { handleUpload, handleDeleteUploaded, mediaPath, mediaName, isLoading } = useMediaService();
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
          <label id="banner" className="rounded aspect-video overflow-hidden relative flex justify-center items-center">
            {isLoading ? (
              <VscLoading className="text-4xl text-primary animate-spin" />
            ) : (
              <Image src={mediaPath ? mediaPath : "https://dummyimage.com/800x250/171715/fefefe&text=-"} alt="banner" fill className="object-cover" />
            )}
            <input
              type="file"
              id="banner"
              className="w-0 h-0 opacity-0"
              accept=".png,.jpg,.jpeg,.webp"
              onChange={async (e) => {
                const files = e.target.files;
                if (files) {
                  await handleUpload(files[0]);
                }
              }}
            />
          </label>
        </>
      )}
      <div className="space-y-6 w-full">
        <div className="flex justify-between items-center">
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
          <div>
            {mediaPath.length > 0 && (
              <Button onClick={async () => await handleDeleteUploaded(mediaName)} className="bg-rose-600 text-white" btnSize="sm">
                <RiDeleteBin5Fill />
                Hapus
              </Button>
            )}
          </div>
        </div>
        <Input label={{ text: "Judul" }} placeholder="Judul Postingan (Opsional)" />
        <div className="space-y-2">
          <label htmlFor="category" className="block">
            Kategori Post
          </label>
          <div className="flex items-center gap-2">
            {categories.map((el, i) => (
              <span key={i} className="text-xs px-2 py-1 border rounded-full inline-flex items-center  gap-2 text-dark-light">
                <RiHashtag /> {el.category_name}
              </span>
            ))}
          </div>
          <SearchCategory
            placeholder="Cari Kategori"
            id="category"
            onSelectValue={(val) => {
              setCategories([...categories, val]);
              console.info(val);
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="body" className="block">
          Post
        </label>
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
        <Button className="bg-primary text-white ml-auto">Submit</Button>
      </div>
    </div>
  );
};

export default WritePostFormQuill;
