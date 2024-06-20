import Image from "next/image";

import classNames from "classnames";
import { Flex, Modal, Typography, Button } from "antd";

import SendIconSVG from "@/components/svg/SendIconSVG";
import RedFlag from "@/public/images/general/RedFlag.svg";
import ContentCopySVG from "@/components/svg/ContentCopySVG";
import ReceiveIconSVG from "@/components/svg/ReceiveIconSVG";

interface ITransactionDetailModalProps {
  isTransactionDetailModalOpened?: boolean;
  setIsTransactionDetailModalOpened?: any;
  transactionDetailData?: any;
}

export default function TransactionDetailModal({
  isTransactionDetailModalOpened,
  setIsTransactionDetailModalOpened,
  transactionDetailData,
}: ITransactionDetailModalProps) {
  let exchangeRate = 1.2;

  const handleOk = () => {
    setIsTransactionDetailModalOpened(false);
  };

  const handleCancel = () => {
    setIsTransactionDetailModalOpened(false);
  };

  return (
    <Modal
      className="flex-col w-full px-[8px] max-w-[460px]"
      title={<Typography className="p-3 text-[14px]/[22px] font-semibold">Transaction Details</Typography>}
      open={isTransactionDetailModalOpened}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Flex key={"Share Receipt"} className="px-3 pb-4">
          <Button onClick={handleOk} className="flex justify-center items-center w-full gap-x-2 h-12 bg-main">
            <Typography className="text-[14px]/[16px] font-bold text-[white]">Share Receipt</Typography>
          </Button>
        </Flex>,
        <Flex key={"Report"} className="pb-4 justify-center">
          <Image src={RedFlag} alt="RedFlag" />
          <Typography className="text-[14px]/[20px] text-error font-medium">Report a problem</Typography>
        </Flex>,
      ]}
    >
      <Flex className="flex-col justify-center items-center w-full px-3 py-4 gap-y-3">
        <Flex className="w-full items-center justify-center py-2 relative">
          <Flex className="absolute left-4">
            {transactionDetailData?.amount < 0 ? <SendIconSVG color="#CB1E1E" /> : <ReceiveIconSVG color="#17714A" />}
          </Flex>
          <Flex className="flex-col">
            <Typography
              className={classNames(
                "text-center text-[20px]/[30px] font-semibold",
                transactionDetailData?.amount < 0 ? "text-error" : "text-success"
              )}
            >
              ${Math.abs(transactionDetailData?.amount)}
            </Typography>
            <Typography
              className={classNames(
                "text-center text-[14px]/[20px] text-error font-medium",
                transactionDetailData?.amount < 0 ? "text-error" : "text-success"
              )}
            >
              WETP {Math.abs(transactionDetailData?.amount / exchangeRate).toFixed(2)}
            </Typography>
          </Flex>
        </Flex>

        <Flex className="w-full flex-col items-start px-3 py-2">
          <Typography className="text-disabled text-[12px]/[18px]">Paid to:</Typography>
          <Typography className="text-[14px]/[22px] font-medium">{transactionDetailData?.name}</Typography>
        </Flex>

        <Flex className="w-full flex-col items-start px-3 py-2">
          <Typography className="text-disabled text-[12px]/[18px]">Date:</Typography>
          <Typography className="text-[14px]/[22px] font-medium">{transactionDetailData?.date}</Typography>
        </Flex>

        <Flex className="w-full px-3 py-2 items-center justify-between">
          <Flex className="flex-col gap-y-1">
            <Typography className="text-disabled text-[12px]/[18px]">Transaction no:</Typography>
            <Typography className="text-[14px]/[22px] font-medium">23010412432431</Typography>
          </Flex>
          <ContentCopySVG color="#637381" />
        </Flex>
      </Flex>
    </Modal>
  );
}
