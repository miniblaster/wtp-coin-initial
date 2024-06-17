export type UserType = {
  name: string;
  username: string;
  email: string;
  password: string;
  country: string;
  currency: string;
  title?: string;
  bio?: string;
  expertise?: string[];
  skills?: string[];
  photo?: string;
  is_public?: boolean;
};
