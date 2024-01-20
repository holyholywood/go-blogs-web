import React, { useEffect, useState } from "react";
import Fetch from "@/lib/api-client/base-api";
import { getMediaUrl } from "./helpers";

type uploadMediaResponseType = {
  media_name: string;
  media_path: string;
};

const useMediaService = (defaultMediaName?: string | null) => {
  const [mediaName, setMediaName] = useState<string>(defaultMediaName ?? "");
  const [mediaPath, setMediaPath] = useState<string>(getMediaUrl(defaultMediaName ?? null));
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

    if (response.status) {
      setStatus(response.status);
      setIsLoading(false);

      setMediaName(response.payload.media_path);
      setMediaPath(response.payload.media_path);
      return response.payload.media_path;
    } else {
      setStatus(response.status);
      setIsLoading(false);

      setError(response.message);
      return null;
    }
  };

  /**
   *
   * @param mediaName:string
   */
  const handleDeleteUploaded = async (mediaName: string) => {
    setIsLoading(true);

    const deleteResult = await Fetch.delete("/profile/avatar");
    const response = await Fetch.delete<string>("/media/" + mediaName);

    setMediaName("");
    setMediaPath("");
    setIsLoading(false);
  };

  useEffect(() => {}, [mediaName]);

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
