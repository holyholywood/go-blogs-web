import MainLayout from "@/app/components/template/MainLayout";
import React from "react";
import { Metadata } from "next";
import AppConfig from "@/config/app-config";
import WritePostForm from "./components/WritePostForm";
import WritePostFormQuill from "./components/WritePostFormQuill";

export const metadata: Metadata = {
  title: "Tulis" + AppConfig.PAGE_TITLE_APP_NAME,
};

const WritePostPage = () => {
  return (
    <MainLayout>
      <WritePostFormQuill />
    </MainLayout>
  );
};

export default WritePostPage;
