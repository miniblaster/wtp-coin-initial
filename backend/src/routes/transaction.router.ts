import express, { Router } from "express";
import { transactionController } from "src/modules/transaction";
import { checkAuth } from "src/middlewares/checkAuth.middleware";

const router: Router = express.Router();

router.post("/send", checkAuth, transactionController.sendPayment);

export default router;
