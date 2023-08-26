import React from "react";
import TopNavigationMenu from "./molecules/TopNavigationMenu";
import RouterLink from "./atoms/RouterLink";
import AppConfig from "@/config/app-config";
import Image from "next/image";
import JWT from "@/lib/helpers/jwt";
import Link from "next/link";
import { cookies } from "next/headers";
import { AccessTokenBodyType } from "@/lib/helpers/jwt/jwt";
import imageHelpers from "@/lib/helpers/image";
import SmallScreenMenu from "./molecules/SmallScreenMenu";

const TopNavigation = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(AppConfig.ACCESS_TOKEN_KEY);
  const user = JWT.serverParse<AccessTokenBodyType>(token?.value as string);
  return (
    <>
      <div className="h-16 flex gap-8 px-4 sticky z-50 top-0 border-b dark:border-white bg-white dark:bg-dark min-w-[20rem]">
        <SmallScreenMenu isLogin={!!user} />

        <TopNavigationMenu isLogin={!!user} />

        {!token ? (
          <div className="ml-auto h-full flex justify-center items-center">
            <RouterLink linkType="button" href="/signin" className="bg-white hover:bg-primary hover:text-white border border-primary text-primary font-semibold">
              Log In
            </RouterLink>
          </div>
        ) : (
          <Link href="/profile" className="flex gap-3 items-center ml-auto ">
            <span className="text-dark-light font-semibold text-sm truncate">Hi, {user?.username}</span>
            <div className="rounded-full overflow-hidden flex justify-center items-center h-fit my-auto">
              <Image
                src={user?.avatar ? imageHelpers.getMediaUrl(user?.avatar) : `https://ui-avatars.com/api/?background=171715&color=fff&name=${user?.name.split(" ").join("+")}`}
                alt="profilePicture"
                width={30}
                height={30}
                quality={100}
              />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default TopNavigation;
