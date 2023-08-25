import React from "react";
import MainLayout from "../components/template/MainLayout";
import serverCookie from "@/lib/helpers/server-cookies";
import AppConfig from "@/config/app-config";
import userService from "@/server/user-service";
import Image from "next/image";
import RouterLink from "../components/atoms/RouterLink";
import { user } from "@/model/User";
import { getRelativeTime } from "@/lib/helpers/date/moment";
import { RiEditBoxLine } from "react-icons/ri";
import { Metadata } from "next";
import imageHelpers from "@/lib/helpers/image";

export async function generateMetadata(): Promise<Metadata> {
  const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
  const user: user & { created_at: string } = await userService.getMyProfile(token);

  return {
    title: user.name + "'s Profile" + AppConfig.PAGE_TITLE_APP_NAME,
  };
}

const ProfilePage = async () => {
  const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
  const user: user & { created_at: string } = await userService.getMyProfile(token);
  if (!user) return "user error";
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <figure className="rounded-full overflow-hidden flex justify-center items-center h-fit my-auto border border-dark-light">
            <Image
              src={user.avatar ? imageHelpers.getImageUrl(user.avatar) : `https://ui-avatars.com/api/?background=171715&color=fff&name=${user?.name.split(" ").join("+")}`}
              alt="profilePicture"
              width={100}
              height={100}
              quality={100}
            />
          </figure>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <span className="text-base tracking-wide text-dark-hover">@{user.username}</span>
            <h1 className="text-xs text-dark-light">Anggota sejak {getRelativeTime(user.created_at)}</h1>
          </div>
          <div className="ml-auto ">
            <RouterLink linkType="default" className="text-primary hover:text-primary-hover gap-2 text-sm font-light" href="/profile/edit">
              <RiEditBoxLine className="text-xl text-decoration-none" />
              Edit Profil
            </RouterLink>
          </div>
        </div>
        <div className="px-1 space-y-2">
          <h3 className="text-lg font-semibold">Bio</h3>
          {user.bio ? (
            <p className="text-sm font-light">{user.bio}</p>
          ) : (
            <RouterLink href="/profile/edit" linkType="default" className="italic hover:underline text-dark-light hover:text-dark-hover" linkSize="sm">
              Tulis biomu sekarang
            </RouterLink>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4 pt-8">
          <div className="border rounded shadow w-full h-full p-4 px-6  space-y-3">
            <h5 className="text-sm text-dark-hover">Total Post</h5>
            <p className="text-2xl font-semibold">20</p>
          </div>
          <div className="border rounded shadow w-full h-full p-4 px-6  space-y-3">
            <h5 className="text-sm text-dark-hover">Total Artikel</h5>
            <p className="text-2xl font-semibold">15</p>
          </div>
          <div className="border rounded shadow w-full h-full p-4 px-6  space-y-3">
            <h5 className="text-sm text-dark-hover">Total Puisi</h5>
            <p className="text-2xl font-semibold">5</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
