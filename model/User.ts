export type user = {
  id: number;
  email: string;
  username: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
};

export type authorization = {
  type: string;
  token: string;
};
