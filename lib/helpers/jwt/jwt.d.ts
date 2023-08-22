export type jwt = string;

export type temporaryJWTBodyType = {
  token_type: "access" | "refresh";
  exp: number;
  jti: string;
  user_id: number;
};

export type AccessTokenBodyType = {
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  sub: string;
  prv: string;
  name: string;
  username: string;
  email: string;
  avatar: string | null;
};
