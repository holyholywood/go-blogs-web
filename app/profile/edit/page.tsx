import React from "react";
import MainLayout from "@/app/components/template/MainLayout";
import serverCookie from "@/lib/helpers/server-cookies";
import AppConfig from "@/config/app-config";
import userService from "@/server/user-service";
import { user } from "@/model/User";
import { Metadata } from "next";
import EditProfileForm from "./components/EditProfileForm";
export async function generateMetadata(): Promise<Metadata> {
  const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
  const user: user & { created_at: string } = await userService.getMyProfile(token);

  return {
    title: "Edit " + user.name + "'s Profile" + AppConfig.PAGE_TITLE_APP_NAME,
  };
}

const EditProfilePage = async () => {
  const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
  const user: user & { created_at: string } = await userService.getMyProfile(token);
  if (!user) return "user error";
  return (
    <MainLayout>
      <EditProfileForm {...user} />
    </MainLayout>
  );
};

export default EditProfilePage;
