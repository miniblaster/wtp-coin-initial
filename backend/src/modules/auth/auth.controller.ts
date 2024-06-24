import { Request, Response } from "express";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import moment from "moment";
import config from "src/config/config";
import { getUserByEmail, createUser, getUserByUsername, loginWithEmailAndPassword } from "./auth.service";
import { deleteOTPFromDatabase, verifyOTPWithDatabase } from "../otp/otp.service";

export const register = async (req: Request, res: Response) => {
  const { name, username, email, password, country, currency, title, bio, isPublic, otp } = req.body;
  try {
    if (!name || !username || !email || !country) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Name or Username or Email or Country is missing" });
    } else if (email && (await getUserByEmail(email))) {
      return res.status(httpStatus.CONFLICT).json({ error: "Email already exists" });
    } else if (username && (await getUserByUsername(username))) {
      return res.status(httpStatus.CONFLICT).json({ error: "Username already exists" });
    }

    const { isVerified } = await verifyOTPWithDatabase(email, otp, "REGISTER");
    if (!isVerified) {
      return res.status(httpStatus.NOT_ACCEPTABLE).json({ error: "OTP entered is wrong" });
    }

    await deleteOTPFromDatabase(email, otp, "REGISTER");

    const _saltRounds = 10; // Number of salt rounds for hashing
    const _hashedPassword = await bcrypt.hash(password, _saltRounds);
    console.log("hashed: ", _hashedPassword);

    const _user = await createUser({
      name,
      username,
      email,
      password: _hashedPassword,
      country,
      currency,
      title,
      bio,
      isPublic,
    });
    if (_user) {
      console.log("Created user: ", _user);
      return res.status(httpStatus.CREATED).json({ newUser: _user, token: generateAuthTokens(_user) });
    } else {
      console.log("No created user");
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: "Error occurred while creating the user" });
    }
  } catch (error) {
    console.error("Error in creating user: ", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error occurred while creating the user" });
  }
};

export const validateRegisterStepOne = async (req: Request, res: Response) => {
  const { username, email } = req.body;
  try {
    if (!email) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Email is required" });
    }
    if (!username) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Username is required" });
    }
    if (email && (await getUserByEmail(email))) {
      return res.status(httpStatus.CONFLICT).json({ error: "Email already exists" });
    }
    if (username && (await getUserByUsername(username))) {
      return res.status(httpStatus.CONFLICT).json({ error: "Username already exists" });
    }
    return res.json({ message: "Valid register step one inputs" }); // res.json() returns status code 200
  } catch (error) {
    console.error("Error in validating register step one: ", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error occurred while validating register step one." });
  }
};

export const validateRegisterStepTwo = async (req: Request, res: Response) => {
  const { country } = req.body;
  try {
    if (!country) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Country is required" });
    }
    return res.json({ message: "Valid register step two inputs" }); // res.json() returns status code 200
  } catch (error) {
    console.error("Error in validating register step two: ", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error occurred while validating register step two." });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const _user = await getUserByEmail(email);
    if (!_user) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "Email does not exists" });
    }

    const _passwordMatch = await bcrypt.compare(password, _user.password.trim());
    if (!_passwordMatch) {
      return res.status(httpStatus.UNAUTHORIZED).json({ error: "Password does not match" });
    }

    return res.status(httpStatus.OK).json({ user: _user, token: generateAuthTokens(_user) });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error while logging in" });
  }
};

export const generateAuthTokens = (user: any) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, "minutes");
  const payload = { user, iat: moment().unix(), exp: accessTokenExpires.unix() };
  const accessToken = jwt.sign(payload, config.jwt.secret);

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
  };
};
