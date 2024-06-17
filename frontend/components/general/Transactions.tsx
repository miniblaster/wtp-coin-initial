import Image from "next/image";

import { Flex, Typography } from "antd";

import classNames from "classnames";

import SendIconSVG from "../svg/SendIconSVG";
import ReceiveIconSVG from "../svg/ReceiveIconSVG";

import transactionsData from "@/mocks/transactions-mobile.json";
import RightArrowIcon from "@/public/images/general/RightArrow.svg";

export default function Transactions() {
  const transactions = transactionsData.data;

  let exchangeRate = 1.2;

  return (
    <Flex vertical className="w-full gap-y-2 lg:gap-y-3">
      {transactions.map((transaction, index) => (
        <Flex
          key={index}
          className="w-full p-2 lg:px-4 lg:py-3 justify-between gap-x-2 lg:gap-x-4 h-[54px] items-center"
        >
          <Flex className="w-full gap-x-2 justify-between items-center">
            <Flex className="gap-x-2 items-center">
              <Flex className="flex justify-center items-center w-8 lg:w-14 h-8 lg:h-14 rounded-full bg-lighter">
                {transaction.amount < 0 ? (
                  <SendIconSVG color="#36309E" width={32} height={32} />
                ) : (
                  <ReceiveIconSVG color="#36309E" width={32} height={32} />
                )}
              </Flex>
              <Flex className="flex flex-col gap-y-2 lg:gap-y-1">
                <Typography className="text-[12px]/[14px] lg:text-[16px]/[28px] font-medium lg:font-semibold">
                  {transaction.name}
                </Typography>
                <Typography className="text-[12px]/[14px] lg:text-[16px]/[28px] text-disabled lg:font-normal">
                  {transaction.date}
                </Typography>
              </Flex>
            </Flex>
            <Flex vertical className="gap-y-2">
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
          <Image
            src={RightArrowIcon}
            alt="RightArrowIcon"
            className="w-4 lg:w-6 h-auto"
          />
        </Flex>
      ))}
    </Flex>
  );
}
