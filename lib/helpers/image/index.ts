class imageHelpers {
  public static getImageUrl(imageName: string | null) {
    if (!imageName) {
      return "https://dummyimage.com/800x250/171715/fefefe&text=-";
    }
    return imageName;
  }

  public static getMediaUrl(mediaName: string | null) {
    if (!mediaName) return "";

    return mediaName;
  }
}

export default imageHelpers;
