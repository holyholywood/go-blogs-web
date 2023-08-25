export type user = {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar: string | null;
  bio: string | null;
};

export type authorization = {
  type: string;
  token: string;
};

export type updateUser = Pick<user, "name" | "email" | "username" | "avatar" | "bio">;
