import bcrypt from "bcrypt";
import UserModel from "src/models/User.model";
import { UserType } from "src/types/user.type";

export const createUser = async (data: UserType) => {
  try {
    const _user = new UserModel(data).save();
    return _user;
  } catch (error: any) {
    throw error;
  }
};

export const updatePassword = async (email: string, password: string) => {
  try {
    const _saltRounds = 10; // Number of salt rounds for hashing
    const _hashedNewPassword = await bcrypt.hash(password, _saltRounds);
    const _updatedUser = await UserModel.findOneAndUpdate(
      { email: email },
      { $set: { password: _hashedNewPassword } },
      { new: true }
    );
    return _updatedUser;
  } catch (error: any) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const _user = await UserModel.findOne({ email: email });
    return _user;
  } catch (error: any) {
    throw error;
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const _user = await UserModel.findOne({ username });
    return _user;
  } catch (error: any) {
    throw error;
  }
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {};
