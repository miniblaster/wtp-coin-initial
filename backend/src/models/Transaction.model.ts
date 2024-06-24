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
    wetpAmount: { type: Number },
    gasFee: { type: Number },
    wetpFee: { type: Number },
    otherCost: { type: Number },
    dateTime: { type: Date },
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model<TransactionType>("Transaction", TransactionSchema);

export default TransactionModel;
