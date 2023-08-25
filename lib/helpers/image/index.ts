class imageHelpers {
  public static getImageUrl(imageName: string | null) {
    if (!imageName) {
      return "https://dummyimage.com/800x250/171715/fefefe&text=-";
    }
    return process.env.NEXT_PUBLIC_BASE_API_URL + "/media/" + imageName;
  }

  public static getMediaUrl(mediaName: string | null) {
    if (!mediaName) return "";

    return process.env.NEXT_PUBLIC_BASE_API_URL + "/media/" + mediaName;
  }
}

export default imageHelpers;
