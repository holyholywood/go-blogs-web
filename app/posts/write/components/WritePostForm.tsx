"use client";
import Button from "@/app/components/atoms/Button";
import React, { useEffect, useState } from "react";

const WritePostForm = () => {
  const [outputText, setOutputText] = useState<string>("");
  useEffect(() => {}, []);
  return (
    <div>
      <div className="w-full h-fit"></div>
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
