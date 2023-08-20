"use client";
import Button from "@/app/components/atoms/Button";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const WritePostForm = () => {
  const [outputText, setOutputText] = useState<string>("");
  return (
    <div>
      <div className="w-full h-fit border">
        <ReactQuill
          placeholder="Apa yang kamu pikirkan?"
          theme="snow"
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
        className="bg-primary text-white"
      >
        Submit
      </Button>
    </div>
  );
};

export default WritePostForm;
