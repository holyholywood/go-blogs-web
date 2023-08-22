import React, { useState } from "react";
import Fetch from "../api-client/base-api";

type uploadMediaResponseType = {
  media_name: string;
  media_path: string;
};

const useMediaService = () => {
  const [mediaName, setMediaName] = useState<string>("");
  const [mediaPath, setMediaPath] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  /**
   *
   * @param file
   */
  const handleUpload = async (file: File) => {
    setIsLoading(true);
    const media = file;

    const formData = new FormData();

    formData.append("media", media);

    const response = await Fetch.postFormData<uploadMediaResponseType>("/media/upload", formData);

    console.info(response);
    if (response.status) {
      setMediaName(response.payload.media_name);
      setMediaPath(response.payload.media_path);
    } else {
      setError(response.message);
    }
    setStatus(response.status);
    setIsLoading(false);
  };

  /**
   *
   * @param mediaName:string
   */
  const handleDeleteUploaded = async (mediaName: string) => {
    setIsLoading(true);

    const response = await Fetch.delete<string>("/media/" + mediaName);
    if (response.status) {
      setMediaName("");
      setMediaPath("");
    } else {
      setError(response.message);
    }
    setStatus(response.status);
    setIsLoading(false);
  };

  return {
    mediaName,
    mediaPath,
    isLoading,
    status,
    error,
    handleUpload,
    handleDeleteUploaded,
  };
};

export default useMediaService;
