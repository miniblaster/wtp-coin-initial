import Image from "next/image";

import { Flex, Modal, Typography, Button } from "antd";

import RedFlag from "@/public/images/general/RedFlag.svg";

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
  const handleOk = () => {
    setIsTransactionDetailModalOpened(false);
  };

  const handleCancel = () => {
    setIsTransactionDetailModalOpened(false);
  };

  return (
    <Modal
      className="flex-col w-full px-[8px]"
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
        <Flex>{transactionDetailData.name}</Flex>
      </Flex>
    </Modal>
  );
}
