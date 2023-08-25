class AppConfig {
  public static APP_NAME: string = "Nge-Blog";
  public static PAGE_TITLE_APP_NAME: string = " | Nge-Blog";
  public static APP_SLOGAN_TEXT: string = "Nge Blogging with Nge-Blog";
  public static ACCESS_TOKEN_KEY: string = "nge-blog-token";

  public static API_URL: string = process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL as string;
}

export default AppConfig;
