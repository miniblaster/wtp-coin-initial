import mongoose, { Schema } from "mongoose";
import { TransactionType } from "src/types/transaction.type";

const TransactionSchema: Schema = new Schema(
  {
    transaction_no: { type: Number },
    account_id: { type: Number, ref: "Account", required: true },
    type: { type: String, enum: ["Send", "Receive", "Buy"] },
    participant_id: { type: Number, ref: "Account", required: true },
    currency: { type: Boolean },
    real_amount: { type: Number },
    weth_amount: { type: Number },
    date: { type: Date },
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model<TransactionType>("Transaction", TransactionSchema);

export default TransactionModel;
