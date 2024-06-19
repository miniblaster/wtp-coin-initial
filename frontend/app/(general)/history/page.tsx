"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Flex, Input, ConfigProvider, Typography, Button } from "antd";

import WETPHeader from "@/components/general/WETPHeader";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";
import SearchIconSVG from "@/components/svg/SearchIconSVG";
import Transactions from "@/components/general/Transactions";
import ContentCopySVG from "@/components/svg/ContentCopySVG";
import TransactionDetailModal from "@/components/general/modals/TransactionDetailModal";

import InviteIllustration from "@/public/images/general/InviteIllustration.svg";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [transactionDetailData, setTransactionDetailData] = useState<any>(null);
  const [isTransactionDetailModalOpened, setIsTransactionDetailModalOpened] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  return (
    <>
      {loading ? (
        <SpinLoading />
      ) : (
        <>
          <Flex vertical className="w-full">
            <WETPHeader />
            <Flex // content
              className="w-full flex flex-col lg:flex-row lg:gap-x-10 lg:px-[140px] lg:py-8 mt-11 lg:mt-[72px] mb-[60px] lg:mb-0"
            >
              <Flex // transactions
                className="w-full flex flex-col lg:overflow-y-scroll lg:h-[calc(100vh-72px-32px-32px)]"
              >
                <Flex // search
                  className="w-full px-4 py-2 sticky top-11 z-10 bg-[white] lg:hidden"
                >
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 12,
                      },
                      components: {
                        Input: {
                          lineHeight: 1.5,
                          paddingBlock: 8,
                          paddingInline: 12,
                        },
                      },
                    }}
                  >
                    <Input addonBefore={<SearchIconSVG />} placeholder="Search transactions" />
                  </ConfigProvider>
                </Flex>
                <Flex vertical className="w-full px-4 py-3 lg:p-6 gap-y-3 lg:gap-y-6">
                  <Typography className="text-[14px]/[14px] lg:text-[18px]/[20px] font-medium lg:font-semibold w-full">
                    Today
                  </Typography>
                  <Transactions
                    isMobile={isMobile}
                    transactionDetailData={transactionDetailData}
                    setTransactionDetailData={setTransactionDetailData}
                    isTransactionDetailModalOpened={isTransactionDetailModalOpened}
                    setIsTransactionDetailModalOpened={setIsTransactionDetailModalOpened}
                  />
                </Flex>
                {/* <Flex vertical className="w-full px-4 py-3 lg:p-6 gap-y-3 lg:gap-y-6">
                <Typography className="text-[14px]/[14px] lg:text-[18px]/[20px] font-medium lg:font-semibold w-full">
                  Yesterday
                </Typography>
                <Transactions isMobile={isMobile} />
              </Flex>
              <Flex vertical className="w-full px-4 py-3 lg:p-6 gap-y-3 lg:gap-y-6">
                <Typography className="text-[14px]/[14px] lg:text-[18px]/[20px] font-medium lg:font-semibold w-full">
                  Thursday
                </Typography>
                <Transactions isMobile={isMobile} />
              </Flex> */}
              </Flex>

              <Flex className="w-[50%] px-4 py-4 gap-y-4 rounded-[16px] border-[0.5px] lg:border-none border-disabled/[32%] hidden lg:flex flex-col items-center">
                <Typography className="text-[16px]/[24px] text-main lg:text-[black] font-semibold w-full">
                  Invite your tribe!
                </Typography>
                <Image
                  priority
                  src={InviteIllustration}
                  alt="invite-illustration"
                  className="h-[124px] lg:h-[156px] w-auto"
                />
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        paddingBlock: 11,
                        paddingInline: 16,
                        fontSize: 12,
                        lineHeight: isMobile ? 1.333 : 1.5,
                        addonBg: "#443CC5",
                      },
                    },
                  }}
                >
                  <Input placeholder="https://www.wetp.io/invite?code=12345ABCDE" addonAfter={<ContentCopySVG />} />
                </ConfigProvider>
                <Flex vertical className="w-full gap-y-1 lg:gap-y-2">
                  <Typography className="text-[12px]/[18px] font-semibold">Email ID</Typography>
                  <ConfigProvider
                    theme={{
                      components: {
                        Input: {
                          paddingBlock: 9,
                          paddingInline: 14,
                          fontSize: 14,
                          lineHeight: isMobile ? 22 / 14 : 1.5,
                          addonBg: "#443CC5",
                        },
                      },
                    }}
                  >
                    <Input placeholder="mrseneca@domain.com" />
                  </ConfigProvider>
                </Flex>
                <Button className="bg-main text-[14px]/[24px] font-bold py-[6px] h-fit w-full text-[white]">
                  Send Invite
                </Button>
              </Flex>
            </Flex>
            <WETPFooter />
          </Flex>
          <TransactionDetailModal
            isTransactionDetailModalOpened={isTransactionDetailModalOpened}
            setIsTransactionDetailModalOpened={setIsTransactionDetailModalOpened}
            transactionDetailData={transactionDetailData}
          />
        </>
      )}
    </>
  );
}
