"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Flex, Typography, Button, Input, ConfigProvider } from "antd";

import ScanQR from "@/components/general/ScanQR";
import SendIconSVG from "@/components/svg/SendIconSVG";
import WETPHeader from "@/components/general/WETPHeader";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";
import SendPayment from "@/components/general/SendPayment";
import ReceiveIconSVG from "@/components/svg/ReceiveIconSVG";
import ContentCopySVG from "@/components/svg/ContentCopySVG";
import CheckIconSVG from "@/components/svg/home/CheckIconSVG";
import BuyWETPIconSVG from "@/components/svg/home/BuyWETPIconSVG";

import Logomark from "@/public/images/auth/Logomark.svg";
import InfoMark from "@/public/images/general/InfoMark.svg";
import Avatar_senesa from "@/public/images/avatar/senesa.svg";
import RightArrow from "@/public/images/general/RightArrow.svg";
import MiniQRIcon from "@/public/images/general/MiniQRIcon.svg";
import RabbyIcon from "@/public/images/general/home/RabbyIcon.svg";
import CompareArrow from "@/public/images/general/CompareArrow.svg";
import MetaMaskIcon from "@/public/images/general/home/MetaMaskIcon.svg";
import HomeBannerIcon from "@/public/images/general/home/HomeBanner.svg";
import InviteIllustration from "@/public/images/general/InviteIllustration.svg";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isScanQROpen, setIsScanQROpen] = useState<boolean>(false);
  const [isPaymentSent, setIsPaymentSent] = useState<boolean>(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
  const [isSendPaymentOpen, setIsSendPaymentOpen] = useState<boolean>(false);

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

  const onClickSendHandler = () => {
    setIsSendPaymentOpen(true);
  };

  const onClickQRHandler = () => [setIsScanQROpen(true)];

  return (
    <>
      {loading ? (
        <SpinLoading />
      ) : (
        <Flex vertical className="w-screen lg:w-full">
          <WETPHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          <Flex // content
            className="w-full flex flex-col lg:pt-8 lg:px-[140px] lg:pb-[14px] lg:gap-y-10 mt-11 lg:mt-[72px] mb-[60px] lg:mb-0"
          >
            <Flex // top
              className="w-full flex flex-col lg:flex-row lg:gap-x-10"
            >
              <Flex // top left
                vertical
                className="w-full px-4 lg:px-0 py-3 lg:py-0 flex flex-col gap-y-6 pt-4 pb-9"
              >
                <Flex vertical className="bg-main/[12%] w-full rounded-[12px] border-b-[3px] p-4 lg:p-6 relative">
                  <Image
                    src={HomeBannerIcon}
                    alt="HomeBanner"
                    className="absolute top-1 lg:top-2 right-2 lg:right-2 w-8 lg:w-16 h-auto"
                  />
                  <Flex vertical className="w-full gap-y-7 lg:gap-y-8">
                    <Flex vertical className="w-full gap-y-4 lg:gap-y-8">
                      <Typography className="text-[12px]/[12px] lg:text-[24px]/[36px] font-medium lg:font-semibold">
                        Total WETP Balance
                      </Typography>
                      <Flex className="w-full flex items-center gap-x-2">
                        <Button className="text-[14px]/[16px] lg:text-[24px]/[28px] font-semibold rounded-full text-main bg-main/[12%] h-8 lg:h-12 w-[70px] lg:w-[118px]">
                          $1,400
                        </Button>
                        <Image src={CompareArrow} alt="CompareArrow" className="w-6 lg:w-8 h-auto" />
                        <Button className="rounded-full bg-[#E6F1FF] h-8 lg:h-12 w-24 lg:w-[187px] flex items-center gap-x-3">
                          <Typography className="text-[14px]/[16px] lg:text-[24px]/[28px] font-semibold text-[#007EBB]">
                            1,680 WETP
                          </Typography>
                          <Image src={Logomark} alt="Logomark" className="w-4 h-auto hidden lg:flex" />
                        </Button>
                        <Image src={InfoMark} alt="InfoMark" className="w-3 lg:w-4 h-auto" />
                      </Flex>
                    </Flex>
                    <Flex className="w-full flex lg:gap-x-4 justify-between">
                      <Flex className="gap-x-4">
                        <Button
                          onClick={onClickSendHandler}
                          className="h-9 lg:h-12 px-4 gap-x-2 flex items-center justify-center bg-main"
                        >
                          <SendIconSVG width={24} height={24} />
                          <Typography className="text-[14px]/[22px] lg:text-[16px]/[20px] text-[white] font-medium">
                            Send
                          </Typography>
                        </Button>
                        <Button className="h-9 lg:h-12 px-4 gap-x-2 flex items-center justify-center bg-main">
                          <ReceiveIconSVG width={24} height={24} />
                          <Typography className="text-[14px]/[22px] lg:text-[16px]/[20px] text-[white] font-medium">
                            Receive
                          </Typography>
                        </Button>
                        <Button className="hidden lg:flex h-9 lg:h-12 px-4 gap-x-2 items-center justify-center bg-main">
                          <BuyWETPIconSVG width={24} height={24} />
                          <Typography className="text-[14px]/[22px] lg:text-[16px]/[20px] text-[white] font-medium">
                            Buy WETP
                          </Typography>
                        </Button>
                      </Flex>
                      <Button
                        onClick={onClickQRHandler}
                        className="h-9 w-9 lg:h-12 lg:w-12 px-2 flex items-center justify-center bg-main"
                      >
                        <Image src={MiniQRIcon} alt="MiniQRIcon" className="w-5 lg:w-7 h-auto" />
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex vertical className="hidden lg:flex gap-y-6 px-6">
                  <Typography className="text-[18px]/[20px] font-semibold">External Wallets</Typography>
                  <Flex className="gap-x-4">
                    <Button className="h-14 flex items-center gap-x-2">
                      <Image src={MetaMaskIcon} alt="MetaMaskIcon" className="w-8 h-auto" />
                      <Typography className="text-[15px]/[26px] font-bold text-main">MetaMask</Typography>
                      <CheckIconSVG />
                    </Button>
                    <Button className="h-14 flex items-center gap-x-2">
                      <Image src={RabbyIcon} alt="RabbyIcon" className="w-8 h-auto" />
                      <Typography className="text-[15px]/[26px] font-bold text-main">Rabby</Typography>
                      <CheckIconSVG />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Flex // top right
                className="w-full px-4 py-3 lg:p-6 gap-y-3 lg:gap-y-6 flex flex-col lg:border-[0.5px] border-disabled/[32%] rounded-[16px]"
              >
                <Typography className="text-[14px]/[14px] lg:text-[18px]/[20px] font-medium lg:font-semibold">
                  Recent Transfers
                </Typography>
                <Flex className="w-full gap-x-3 overflow-scroll overflow-y-hidden lg:overflow-hidden flex flex-row lg:flex-col lg:gap-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Flex
                      key={index}
                      align="center"
                      justify="center"
                      className="flex flex-col lg:flex-row w-20 lg:w-full px-2 lg:px-4 py-2 gap-y-2 lg:gap-y-3 lg:gap-x-3 border-focus/[24%] border-[0.5px] rounded-[8px] flex-shrink-0"
                    >
                      <Image src={Avatar_senesa} alt="Avatar_senesa" className="w-8 lg:w-10 h-auto outline-1" />
                      <Typography className="w-full text-ellipsis overflow-hidden whitespace-nowrap text-[12px]/[12px] lg:text-[16px]/[24px] font-semibold">
                        @steve.harrison
                      </Typography>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <Flex // bottom
              className="w-full flex flex-col lg:flex-row lg:gap-x-10"
            >
              <Flex //bottom left
                vertical
                className="w-full lg:min-w-[400px] px-4 py-3 lg:p-6 gap-y-3 lg:gap-y-6 lg:border-[0.5px] border-disabled/[32%] rounded-[16px]"
              >
                <Flex className="w-full flex justify-between items-center">
                  <Typography className="text-[14px]/[14px] lg:text-[18px]/[20px] font-medium">
                    Latest Transactions / History
                  </Typography>
                  <Typography className="text-[12px]/[14px] lg:text-[16px]/[18px] text-secondary">View all</Typography>
                </Flex>
                <Flex vertical className="w-full gap-y-2 lg:gap-y-3">
                  {Array.from({ length: 4 }, (_, index) => index).map((i) => (
                    <Flex
                      key={i}
                      className="flex justify-between items-center rounded-[8px] border-[0.5px] border-focus/[24%] lg:px-4 lg:py-3 lg:gap-x-4"
                    >
                      <Flex className="flex items-center justify-between p-[6px] lg:p-0 w-full">
                        <Flex className="gap-x-2">
                          <Flex className="bg-lighter px-[6px] rounded-full h-8 lg:h-14 w-8 lg:w-14 flex justify-center items-center">
                            <SendIconSVG
                              color="#36309E"
                              width={isMobile ? "32px" : "56px"}
                              height={isMobile ? "32px" : "56px"}
                            />
                          </Flex>
                          <Flex vertical className="gap-y-2 lg:gap-y-1">
                            <Typography className="text-[12px]/[14px] lg:text-[16px]/[28px] font-medium lg:font-semibold">
                              MetaMask
                            </Typography>
                            <Typography className="text-disabled lg:text-secondary text-[12px]/[14px] lg:text-[14px]/[22px]">
                              Today, 12:32 PM
                            </Typography>
                          </Flex>
                        </Flex>
                        <Flex vertical className="items-end">
                          <Typography className="text-error text-[14px]/[16px] lg:text-[18px]/[20px] font-semibold lg:font-bold">
                            $35.23
                          </Typography>
                          <Typography className="text-error text-[12px]/[14px] lg:text-[14px]/[16px] font-medium lg:font-bold">
                            WETP 29.35
                          </Typography>
                        </Flex>
                      </Flex>

                      <Image src={RightArrow} alt="RightArrow" className="w-4 lg:w-6 h-auto" />
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              <Flex // bottom right
                vertical
                className="w-full px-4 py-3 lg:p-6 lg:border-[0.5px] border-disabled/[32%] rounded-[16px]"
              >
                <Flex className="w-full px-4 py-4 gap-y-4 rounded-[16px] border-[0.5px] lg:border-none border-disabled/[32%] flex flex-col items-center">
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
            </Flex>
          </Flex>
          <WETPFooter activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
      )}
      <ScanQR isScanQROpen={isScanQROpen} setIsScanQROpen={setIsScanQROpen} />
      <SendPayment
        isSendPaymentOpen={isSendPaymentOpen}
        setIsSendPaymentOpen={setIsSendPaymentOpen}
        setIsPaymentSent={setIsPaymentSent}
        isPaymentSent={isPaymentSent}
        setIsPaymentSuccess={setIsPaymentSuccess}
        isPaymentSuccess={isPaymentSuccess}
      />
    </>
  );
}
