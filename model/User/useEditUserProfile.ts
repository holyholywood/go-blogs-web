import { useState } from "react";
import { user } from ".";
import userService from "@/services/user-service";
import { useRouter } from "next/navigation";

const useEditUserProfile = (user: user) => {
  const [userData, setUserData] = useState({ ...user });
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const router = useRouter();
  async function handleEditProfile() {
    setIsUpdating(true);
    const res = await userService.updateProfile(userData.id, {
      ...userData,
    });
    if (res.status) {
      router.push("/profile");
    } else {
      setErrMessage(res.message);
      setIsUpdating(false);
    }
  }

  return {
    userData,
    setUserData,
    isUpdating,
    errMessage,
    handleEditProfile,
  };
};

export default useEditUserProfile;
