"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Typography, Input, Button, ConfigProvider } from "antd";

import SendRequestIllustration from "@/public/img/auth/SendRequestIllustration.svg";

export default function SendRequest() {
  return (
    <>
      <Flex vertical align="center" className="pt-4 gap-y-8">
        <Flex justify="center" className="w-full px-4">
          <Typography className="text-[20px]/[30px] font-bold text-center">
            Password Request Sent Successfully!
          </Typography>
        </Flex>
        <Flex justify="center" className="w-full px-[107px]">
          <Image alt="SendRequestIllustration" src={SendRequestIllustration} />
        </Flex>
        <Flex justify="center" className="w-full px-4">
          <Typography className="text-center text-[14px]/[24px]">
            We&lsquo;ve sent a 6-digit OTP confirmation email to&nbsp;
            <Link href="#">sage.seneca@gmail.com</Link>.<br />
            Please enter the code in below box to verify your email.
          </Typography>
        </Flex>
        <Flex justify="center" className="w-full px-[18px] gap-x-3">
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  paddingBlock: 12,
                  paddingInline: 17,
                  inputFontSize: 16,
                },
              },
            }}
          >
            <Input.OTP className="" />
          </ConfigProvider>
        </Flex>
        <Flex vertical align="center" className="w-full px-4 gap-y-6">
          <Flex vertical className="w-full gap-y-3">
            <Button className="text-[15px]/[26px] font-bold text-[white] py-[11px] h-fit bg-mainColor w-full">
              Verify OTP
            </Button>
            <Button className="text-[15px]/[26px] font-bold text-secondary py-[11px] h-fit w-full">
              Cancel
            </Button>
          </Flex>
          <Flex>
            <Typography>Don&lsquo;t have a code?</Typography>
            <Link href="#">Resend code</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
