import express, { Router } from 'express';
import { otpController } from '../modules/otp';

const router: Router = express.Router();

router.post('/send', otpController.sendEmailOtp);
router.post('/verify', otpController.otpValidation);
router.post('/verify-password', otpController.verifyEmailOtpToForgotPassword);

export default router;
