import mongoose, { Schema } from "mongoose";
import { AccountType } from "src/types/account.type";

const AccountSchema: Schema = new Schema(
  {
    user_id: { type: Number, ref: "User", required: true },
    weth_balance: { type: Number },
    hasMetamask: { type: Boolean },
    hasRabby: { type: Boolean },
  },
  { timestamps: true }
);

const AccountModel = mongoose.model<AccountType>("Account", AccountSchema);

export default AccountModel;
