import express, { Router } from "express";
import { authController } from "src/modules/auth";

const router: Router = express.Router();

router.post("/register", authController.register);
router.post("/validate-register-step-one", authController.validateRegisterStepOne);
router.post("/validate-register-step-two", authController.validateRegisterStepTwo);
router.post("/login", authController.login);

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
