import Image from "next/image";

import { Flex, Typography } from "antd";

import transactionsData from "@/mocks/transactions-desktop.json";

import RightArrowIcon from "@/public/images/general/RightArrow.svg";

export default function TransactionsDesktop() {
  const transactions = transactionsData.data;

  return (
    <Flex className="w-full gap-y-3">
      {transactions.map((transaction, index) => (
        <Flex
          key={index}
          className="w-full flex flex-row items-center px-4 py-3 gap-y-4"
        >
          <Flex className="w-full">content</Flex>
          <Image
            src={RightArrowIcon}
            alt="RightArrowIcon"
            className="w-6 h-auto"
          />
        </Flex>
      ))}
    </Flex>
  );
}
