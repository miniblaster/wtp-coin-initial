export type TransactionType = {
  transactionNo: number;
  accountId: number;
  type: string;
  participantId: number;
  currency: boolean;
  realAmount: number;
  wetpAmount: number;
  gasFee: Number;
  wetpFee: Number;
  otherCost: Number;
  dateTime: Date;
};
