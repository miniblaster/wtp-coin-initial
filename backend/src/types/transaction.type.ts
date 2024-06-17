export type TransactionType = {
  transactionNo: number;
  accountId: number;
  type: string;
  participantId: number;
  currency: boolean;
  realAmount: number;
  wethAmount: number;
  date: Date;
};
