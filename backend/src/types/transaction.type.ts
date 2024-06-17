export type TransactionType = {
  transaction_no: number;
  account_id: number;
  type: string;
  participant_id: number;
  currency: boolean;
  real_amount: number;
  weth_amount: number;
  date: Date;
}
