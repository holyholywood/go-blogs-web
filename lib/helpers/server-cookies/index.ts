import { cookies } from "next/headers";

class serverCookie {
  public static get(key: string) {
    const cookieStore = cookies();

    return cookieStore.get(key)?.value;
  }
}

export default serverCookie;
