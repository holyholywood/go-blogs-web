"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ImagePreviewProps = {
  quality?: number;
  alt: string;
  src: string;
  className?: string;
  fill?: boolean;
  caption?: string;
};
const ImagePreview = ({ ...props }: ImagePreviewProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  return (
    <>
      <Image
        {...props}
        onClick={() => {
          setIsPreviewOpen(true);
        }}
        alt={props.alt}
        className={props.className + " cursor-pointer"}
      />

      {isPreviewOpen &&
        createPortal(
          <div
            onClick={() => {
              setIsPreviewOpen(false);
            }}
            className="bg-black/75 fixed top-0 h-screen w-screen z-50 flex flex-col gap-4 justify-center items-center"
          >
            <div className="relative  max-w-7xl aspect-video w-full">
              <Image src={props.src} alt={props.src + "-preview"} fill className="object-contain" />
            </div>
            {!!props.caption && <h5 className="text-white text-xl font-semibold">{props.caption}</h5>}
          </div>,
          document.body
        )}
    </>
  );
};

export default ImagePreview;
