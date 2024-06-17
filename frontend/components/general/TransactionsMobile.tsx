import Image from "next/image";

import { Flex, Typography } from "antd";

import classNames from "classnames";

import SendIconSVG from "../svg/SendIconSVG";

import transactionsData from "@/mocks/transactions-mobile.json";
import RightArrowIcon from "@/public/images/general/RightArrow.svg";

export default function TransactionsMobile() {
  const transactions = transactionsData.data;

  let exchangeRate = 1.2;

  return (
    <Flex vertical className="w-full gap-y-2">
      {transactions.map((transaction, index) => (
        <Flex
          key={index}
          className="w-full p-2 justify-between gap-x-2 h-[54px] items-center"
        >
          <Flex className="w-full gap-x-2 justify-between items-center">
            <Flex className="gap-x-2 items-center">
              <Flex className="flex justify-center items-center w-8 h-8 rounded-full bg-lighter">
                <SendIconSVG color="#36309E" />
              </Flex>
              <Flex className="flex flex-col gap-y-2">
                <Typography className="text-[12px]/[14px] font-medium">
                  {transaction.name}
                </Typography>
                <Typography className="text-[12px]/[14px] text-disabled">
                  {transaction.date}
                </Typography>
              </Flex>
            </Flex>
            <Flex vertical className="">
              <Flex className="justify-end">
                <Typography
                  className={
                    (classNames("text-[14px]/[16px] font-semibold text-right"),
                    transaction.amount < 0 ? "text-error" : "text-success")
                  }
                >
                  $
                </Typography>
                <Typography
                  className={
                    (classNames("text-[14px]/[16px] font-semibold text-right"),
                    transaction.amount < 0 ? "text-error" : "text-success")
                  }
                >
                  {Math.abs(transaction.amount)}
                </Typography>
              </Flex>
              <Flex className="justify-end">
                <Typography
                  className={
                    (classNames("text-[12px]/[14px] font-medium text-right"),
                    transaction.amount < 0 ? "text-error" : "text-success")
                  }
                >
                  WETP
                </Typography>
                <Typography
                  className={
                    (classNames("text-[12px]/[14px] font-medium text-right"),
                    transaction.amount < 0 ? "text-error" : "text-success")
                  }
                >
                  {Math.abs(transaction.amount / exchangeRate).toFixed(2)}
                </Typography>
              </Flex>
            </Flex>
          </Flex>
          <Image src={RightArrowIcon} alt="RightArrowIcon" />
        </Flex>
      ))}
    </Flex>
  );
}
