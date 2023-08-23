class JWT {
  static parse<T>(token: string): T {
    const base64Token = token.split(".");
    const bodyToken = base64Token[1];
    const body = window.atob(bodyToken);

    return JSON.parse(body) as T;
  }

  static serverParse<T>(token: string) {
    if (!token) return null;
    const base64Token = token.split(".");
    const bodyToken = base64Token[1];
    const decodedBuffer = Buffer.from(bodyToken, "base64");
    const body = decodedBuffer.toString("utf-8");

    return JSON.parse(body) as T;
  }
}

export default JWT;
