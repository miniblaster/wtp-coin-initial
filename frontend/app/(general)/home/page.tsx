"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Flex, Typography, Button, Input, ConfigProvider } from "antd";

import SendIconSVG from "@/components/svg/SendIconSVG";
import WETPHeader from "@/components/general/WETPHeader";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";
import ReceiveIconSVG from "@/components/svg/ReceiveIconSVG";
import ContentCopySVG from "@/components/svg/ContentCopySVG";

import InfoMark from "@/public/images/general/InfoMark.svg";
import Avatar_senesa from "@/public/images/avatar/senesa.svg";
import RightArrow from "@/public/images/general/RightArrow.svg";
import MiniQRIcon from "@/public/images/general/MiniQRIcon.svg";
import CompareArrow from "@/public/images/general/CompareArrow.svg";
import InviteIllustration from "@/public/images/general/InviteIllustration.svg";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1);
  }, []);

  return (
    <>
      {loading ? (
        <SpinLoading />
      ) : (
        <Flex vertical className="w-full flex">
          <WETPHeader />
          <Flex vertical className="w-full">
            <Flex className="w-full px-4 py-3 flex flex-col">
              <Flex
                vertical
                className="bg-main/[12%] w-full rounded-[12px] border-b-[3px] p-4 gap-y-7"
              >
                <Flex vertical className="w-full gap-y-7">
                  <Flex vertical className="w-full gap-y-4">
                    <Typography className="text-[12px]/[12px] font-medium">
                      Total WETP Balance
                    </Typography>
                    <Flex className="w-full flex items-center gap-x-2">
                      <Button className="text-[14px]/[16px] font-semibold rounded-full text-main bg-main/[12%] h-8">
                        $1,400
                      </Button>
                      <Image
                        src={CompareArrow}
                        alt="CompareArrow"
                        className="w-6 h-auto"
                      />
                      <Button className="text-[14px]/[16px] font-semibold rounded-full text-[#007EBB] bg-[#E6F1FF] h-8">
                        1,680 WETP
                      </Button>
                      <Image
                        src={InfoMark}
                        alt="InfoMark"
                        className="w-3 h-auto"
                      />
                    </Flex>
                  </Flex>
                  <Flex className="w-full flex justify-between">
                    <Flex className="gap-x-4">
                      <Button className="h-9 px-4 gap-x-2 flex items-center justify-center bg-main">
                        <SendIconSVG />
                        <Typography className="text-[14px]/[22px] text-[white] font-medium">
                          Send
                        </Typography>
                      </Button>
                      <Button className="h-9 px-4 gap-x-2 flex items-center justify-center bg-main">
                        <ReceiveIconSVG />
                        <Typography className="text-[14px]/[22px] text-[white] font-medium">
                          Receive
                        </Typography>
                      </Button>
                    </Flex>
                    <Button className="h-9 px-2 flex items-center justify-center bg-main">
                      <Image
                        src={MiniQRIcon}
                        alt="MiniQRIcon"
                        className="w-5 h-auto"
                      />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex className="w-full px-4 py-3 gap-y-3 flex flex-col">
              <Typography className="text-[14px]/[14px] font-medium">
                Frequently Transacted
              </Typography>
              <Flex className="w-full gap-x-3 overflow-scroll">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Flex
                    key={index}
                    vertical
                    align="center"
                    justify="center"
                    className="w-20 px-2 py-2 gap-y-2 border-focus/[24%] border-[0.5px] rounded-[8px] flex-shrink-0"
                  >
                    <Image
                      src={Avatar_senesa}
                      alt="Avatar_senesa"
                      className="w-8 h-auto outline-1"
                    />
                    <Typography className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                      @steve.harrison
                    </Typography>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical className="w-full">
            <Flex vertical className="w-full px-4 py-3 gap-y-3">
              <Flex className="w-full flex justify-between">
                <Typography className="text-[14px]/[14px] font-medium">
                  Latest Transactions
                </Typography>
                <Typography className="text-[12px]/[14px] text-secondary">
                  View all
                </Typography>
              </Flex>
              {Array.from({ length: 2 }, (_, index) => index).map((i) => (
                <Flex key={i} vertical className="w-full gap-y-2">
                  <Flex className="flex justify-between items-center rounded-[8px] border-[0.5px] border-focus/[24%]">
                    <Flex className="flex items-center gap-x-2 p-[6px]">
                      <Button className="bg-lighter px-[6px] rounded-full">
                        <SendIconSVG color="#36309E" />
                      </Button>
                      <Flex vertical className="gap-y-2">
                        <Typography className="text-[12px]/[14px] font-medium">
                          MetaMask
                        </Typography>
                        <Typography className="text-disabled text-[12px]/[14px]">
                          Today, 12:32 PM
                        </Typography>
                      </Flex>
                    </Flex>
                    <Flex className="flex items-center gap-x-2">
                      <Flex vertical className="items-end">
                        <Typography className="text-error text-[14px]/[16px] font-semibold">
                          $35.23
                        </Typography>
                        <Typography className="text-error text-[12px]/[14px] font-medium">
                          WETP 29.35
                        </Typography>
                      </Flex>
                      <Image
                        src={RightArrow}
                        alt="RightArrow"
                        className="w-4 h-auto"
                      />
                    </Flex>
                  </Flex>
                  <Flex className="flex justify-between items-center rounded-[8px] border-[0.5px] border-focus/[24%]">
                    <Flex className="flex items-center gap-x-2 p-[6px]">
                      <Button className="bg-lighter px-[6px] rounded-full">
                        <ReceiveIconSVG color="#36309E" />
                      </Button>
                      <Flex vertical className="gap-y-2">
                        <Typography className="text-[12px]/[14px] font-medium">
                          @zen.archer
                        </Typography>
                        <Typography className="text-disabled text-[12px]/[14px]">
                          Yesterday, 05:24 PM
                        </Typography>
                      </Flex>
                    </Flex>
                    <Flex className="flex items-center gap-x-2">
                      <Flex vertical className="items-end">
                        <Typography className="text-[#17714A] text-[14px]/[16px] font-semibold">
                          $35.23
                        </Typography>
                        <Typography className="text-[#17714A] text-[12px]/[14px] font-medium">
                          WETP 29.35
                        </Typography>
                      </Flex>
                      <Image
                        src={RightArrow}
                        alt="RightArrow"
                        className="w-4 h-auto"
                      />
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
            <Flex vertical className="w-full px-4 py-3 gap-y-3">
              <Flex className="w-full px-4 py-4 gap-y-4 rounded-[16px] border-[0.5px] border-disabled/[32%] flex flex-col items-center">
                <Typography className="text-[16px]/[24px] text-main font-semibold w-full">
                  Invite your tribe!
                </Typography>
                <Image
                  priority
                  src={InviteIllustration}
                  alt="invite-illustration"
                  className="h-[124px] w-auto"
                />
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        paddingBlock: 11,
                        paddingInline: 16,
                        fontSize: 12,
                        lineHeight: 1.333,
                        addonBg: "#443CC5",
                      },
                    },
                  }}
                >
                  <Input
                    placeholder="https://www.wetp.io/invite?code=12345ABCDE"
                    addonAfter={<ContentCopySVG />}
                  />
                  <Flex vertical className="w-full gap-y-1">
                    <Typography className="text-[12px]/[18px] font-semibold">
                      Email ID
                    </Typography>
                    <Input placeholder="mrseneca@domain.com" />
                  </Flex>
                  <Button className="bg-main text-[14px]/[24px] font-bold py-[6px] h-fit w-full text-[white]">
                    Send Invite
                  </Button>
                </ConfigProvider>
              </Flex>
            </Flex>
          </Flex>
          <WETPFooter />
        </Flex>
      )}
    </>
  );
}
