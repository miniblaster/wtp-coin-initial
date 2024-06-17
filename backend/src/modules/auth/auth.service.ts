import UserModel from "src/models/User.model";
import { UserType } from "src/types/user.type";

export const createUser = async (data: UserType) => {
  try {
    const _user = new UserModel(data).save();
    return _user;
  } catch (error: any) {
    console.error("Error in registering user: ", error);
    throw new Error("Error in registering user");
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const _user = await UserModel.findOne({ email: email });
    return _user;
  } catch (error: any) {
    console.error("Error registering user: ", error);
    throw new Error("Error in getting user by email");
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const _user = await UserModel.findOne({ username });
    return _user;
  } catch (error: any) {
    console.error("Error in getting user by username: ", error);
    throw new Error("Error in getting user by username");
  }
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {};
