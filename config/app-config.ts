class AppConfig {
  public static APP_NAME: string = "Go-Blog";
  public static PAGE_TITLE_APP_NAME: string = " | Go-Blog";
  public static APP_SLOGAN_TEXT: string = "Go Blogging with Go Blog";
  public static ACCESS_TOKEN_KEY: string = "go-blog-token";

  public static API_URL: string = process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL as string;
}

export default AppConfig;
