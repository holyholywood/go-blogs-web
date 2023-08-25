export function getMediaUrl(mediaName: string | null) {
  if (!mediaName) return "";

  return process.env.NEXT_PUBLIC_BASE_API_URL + "/media/" + mediaName;
}
