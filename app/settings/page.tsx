import React from "react";
import MainLayout from "../components/template/MainLayout";
import { Metadata } from "next";
import AppConfig from "@/config/app-config";
import Divider from "../components/atoms/Divider";

export const metadata: Metadata = {
  title: "Pengaturan" + AppConfig.PAGE_TITLE_APP_NAME,
};

const SetingsPage = () => {
  return (
    <MainLayout className="pb-8">
      <div className="text-sm">
        <h1 className="text-2xl font-semibold">General</h1>
        <Divider className="my-4" />
        <ul>
          <li className="flex items-center gap-2">
            <label htmlFor="isDarkMode">Dark Mode :</label> <input type="checkbox" id="isDarkMode" />
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default SetingsPage;
