import express, { Router, Request, Response } from "express";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import {
  getUserByEmail,
  createUser,
  getUserByUsername,
  loginWithEmailAndPassword,
} from "../controller/auth.controller";

const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const { name, username, email, password, country, currency } = req.body;
  try {
    if (!name || !username || !email || !country || !currency) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ error: "Name or Username or Email or Country or Currency is missing" });
    } else if (email && (await getUserByEmail(email))) {
      return res.status(httpStatus.CONFLICT).send({ error: "Email already exists" });
    } else if (username && (await getUserByUsername(username))) {
      return res.status(httpStatus.CONFLICT).send({ error: "Username already exists" });
    }

    const saltRounds = 10; // Number of salt rounds for hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("hashed: ", hashedPassword);

    const _user = await createUser({ name, username, email, password: hashedPassword, country, currency });
    if (_user) {
      console.log("Created user: ", _user);
      return res.status(httpStatus.CREATED).send({ newUser: _user });
    } else {
      console.log("Error in creating user");
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Error occurred while creating the user" });
    }
  } catch (error) {
    console.error("Error in creating user: ", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Error occurred while creating the user" });
  }
});

router.post("/register-validation", async (req: Request, res: Response) => {
  const { username, email } = req.body;
  try {
    if (!email) {
      return res.status(httpStatus.BAD_REQUEST).send({ error: "Email is required" });
    }
    if (!username) {
      return res.status(httpStatus.BAD_REQUEST).send({ error: "Username is required" });
    }
    if (email && (await getUserByEmail(email))) {
      return res.status(httpStatus.CONFLICT).send({ error: "Email already exists" });
    }
    if (username && (await getUserByUsername(username))) {
      return res.status(httpStatus.CONFLICT).send({ error: "Username already exists" });
    }
    return res.status(httpStatus.OK).send({ error: "Valid register input" });
  } catch (error) {
    console.error("Error in validating register inputs: ", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Error occurred while validating register inputs." });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const _user = await getUserByEmail(email);
    if (!_user) {
      return res.status(httpStatus.NOT_FOUND).send({ message: "Email does not exists" });
    }
    const passwordMatch = await bcrypt.compare(password, _user.password.trim());
    if (!passwordMatch) {
      return res.status(httpStatus.NOT_FOUND).send({ message: "Password does not match" });
    }
    return res.status(httpStatus.OK).send({ user: _user });
  } catch {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Internal server error while logging in" });
  }
});

// router.post("/register", authController.register);
// router.post("/logout", authController.logout);
// router.post("/refresh-tokens", authController.refreshTokens);
// router.post("/upload-image", tokenMiddlware.authenticateToken, upload.single("file"), authController.uploadImage);
// router.post("/documents", tokenMiddlware.authenticateToken, upload.array("files", 5), authController.uploadDocuments);
// router.get("/documents", tokenMiddlware.authenticateToken, authController.getAllDocuments);
// router.delete("/documents/:index", tokenMiddlware.authenticateToken, authController.deleteDocumentByIndex);
// router.put("/update-user", tokenMiddlware.authenticateToken, authController.updateUser);
// router.get("/overview", tokenMiddlware.authenticateToken, authController.overviewDetails);
// router.get("/info", tokenMiddlware.authenticateToken, authController.getInfo);

export default router;
