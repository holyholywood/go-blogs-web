export type user = {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar: string | null;
};

export type authorization = {
  type: string;
  token: string;
};
