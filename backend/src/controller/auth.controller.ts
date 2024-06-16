import UserModel from "src/models/User.model";
import { UserType } from "src/types/user.type";

export const createUser = async (data: UserType) => {
  return new UserModel(data).save();
};

export const getUserByEmail = async (email: string) => {
  try {
    const _user = await UserModel.findOne({ email: email });
    return _user;
  } catch (error: any) {
    console.error("Error registering user:", error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const _user = await UserModel.findOne({ username });
    return _user;
  } catch (error: any) {
    console.error("Error registering user:", error);
  }
};
