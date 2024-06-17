import mongoose, { Schema } from "mongoose";
import { TransactionType } from "src/types/transaction.type";

const TransactionSchema: Schema = new Schema(
  {
    transactionNo: { type: Number },
    accountId: { type: Number, ref: "Account", required: true },
    type: { type: String, enum: ["Send", "Receive", "Buy"] },
    participantId: { type: Number, ref: "Account", required: true },
    currency: { type: Boolean },
    realAmount: { type: Number },
    wethAmount: { type: Number },
    date: { type: Date },
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model<TransactionType>("Transaction", TransactionSchema);

export default TransactionModel;
