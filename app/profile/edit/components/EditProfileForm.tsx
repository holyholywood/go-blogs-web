"use client";
import Button from "@/app/components/atoms/Button";
import Snackbar from "@/app/components/atoms/Snackbar";
import useMediaService from "@/lib/hooks/useUploadMedia";
import { user } from "@/model/User";
import useEditUserProfile from "@/model/User/useEditUserProfile";
import Image from "next/image";
import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

type EditProfileFormProps = {} & user;

const EditProfileForm = ({ ...user }: EditProfileFormProps) => {
  const { userData, setUserData, errMessage, isUpdating, handleEditProfile } = useEditUserProfile(user);
  const { handleUpload, handleDeleteUploaded, mediaPath, mediaName, isLoading } = useMediaService(user.avatar);

  return (
    <div className="space-y-8">
      <Snackbar message={errMessage} />
      <div className="flex flex-col justify-center items-center gap-4">
        <label htmlFor="avatar" className="rounded-full cursor-pointer overflow-hidden group flex justify-center items-center h-fit my-auto border-dark-light border relative">
          {mediaName ? (
            <div className="bg-black/20 absolute z-20 w-full h-full group-hover:flex justify-center items-center hidden cursor-default" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={async () => {
                  await handleDeleteUploaded(mediaName);
                  setUserData({ ...userData, avatar: null });
                }}
                className="bg-white p-1 rounded-full"
              >
                <RiDeleteBin2Line className="text-rose-500 text-xl" />
              </button>
            </div>
          ) : (
            <div className="bg-black/75  absolute z-20 w-full h-full group-hover:flex justify-center items-center hidden">
              <span className="text-white text-xs font-light">Unggah Foto</span>
            </div>
          )}
          {isLoading && (
            <div className="bg-black/75  absolute z-20 w-full h-full flex justify-center items-center">
              <span className="text-white text-xs font-light">Loading...</span>
            </div>
          )}
          <Image
            src={mediaPath ? mediaPath : `https://ui-avatars.com/api/?background=171715&color=fff&name=${userData.name.split(" ").join("+")}`}
            alt="profilePicture"
            width={100}
            height={100}
            quality={100}
          />
          <input
            disabled={!!mediaName}
            type="file"
            id="avatar"
            className="w-0 h-0"
            accept=".png,.jpg,.jpeg"
            onChange={async (e) => {
              const files = e.target.files;
              if (files) {
                setUserData({ ...userData, avatar: await handleUpload(files[0]) });
              }
            }}
          />
        </label>
        <div className="space-y-4">
          <div className="mb-10">
            <label htmlFor="name" className="block text-xs text-dark-light text-center">
              Nama
            </label>
            <input
              id="name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              placeholder={userData.name}
              className="block mx-auto text-center focus:outline-none px-2 py-2 border-b focus:border-b-primary-hover"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="username" className="block text-xs text-dark-light text-center">
              Username (Maks. 16 Karakter)
            </label>
            <input
              id="username"
              value={userData.username}
              onChange={(e) => e.target.value.length <= 16 && setUserData({ ...userData, username: e.target.value.replace(/\s+/g, "") })}
              className=" mx-auto text-center focus:outline-none px-2 py-2 border-b focus:border-b-primary-hover"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="block text-xs text-dark-light text-center">
              Email
            </label>
            <input
              id="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              type="email"
              className=" mx-auto text-center focus:outline-none px-2 py-2 border-b focus:border-b-primary-hover"
            />
          </div>
        </div>
      </div>
      <div className=" max-w-xl mx-auto w-full space-y-2">
        <label htmlFor="bio" className="text-lg font-semibold block">
          Bio
        </label>
        <textarea
          value={userData.bio ?? ""}
          onChange={(e) => e.target.value.length <= 255 && setUserData({ ...userData, bio: e.target.value })}
          name="bio"
          id="bio"
          className="border text-sm font-light rounded resize-none w-full block min-h-[9rem] p-1 focus:outline-primary-hover"
        ></textarea>
        <span className="text-xs text-dark-light">{userData.bio ? userData.bio?.length : 0} / 255</span>
      </div>
      <div className=" max-w-xl mx-auto w-full space-y-2">
        <Button className="bg-primary ml-auto text-white hover:bg-primary-hover disabled:bg-primary-disabled" isLoading={isUpdating} onClick={handleEditProfile}>
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default EditProfileForm;
