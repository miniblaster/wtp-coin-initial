import mongoose, { Schema } from "mongoose";
import { AccountType } from "src/types/account.type";

const AccountSchema: Schema = new Schema(
  {
    userId: { type: Number, ref: "User", required: true },
    wethBalance: { type: Number },
    hasMetamask: { type: Boolean },
    hasRabby: { type: Boolean },
  },
  { timestamps: true }
);

const AccountModel = mongoose.model<AccountType>("Account", AccountSchema);

export default AccountModel;
