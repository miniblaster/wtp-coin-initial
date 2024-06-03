"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Typography, Input, Button, ConfigProvider } from "antd";

import SendRequestIllustration from "@/public/img/auth/SendRequestIllustration.svg";
import AuthReturnArrow from "@/public/img/auth/ic-eva_arrow-ios-back-fill.svg";

export default function SendRequest() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlock: 15,
          },
        },
      }}
    >
      <Flex vertical className={`w-[503px] h-[618px] py-10 gap-y-6 shadow-lg`}>
        <Image
          alt="SendRequestIllustration"
          src={SendRequestIllustration}
          className={`mx-auto`}
        />
        <Flex vertical className={`px-6`}>
          <Typography align="center" className={`text-[32px]/[48px] font-bold`}>
            Request sent successfully!
          </Typography>
          <Typography align="center" className={`text-secondary`}>
            We&lsquo;ve sent a 6-digit OTP confirmation email to your email.
            Please enter the code in below box to verify your email.
          </Typography>
        </Flex>
        <Flex justify="center" className={`mx-8`}>
          <Input.OTP className="custom-otp-input" />
        </Flex>
        <Button
          className={`bg-mainColor text-[white] text-[15px]/[26px] font-bold py-[11px] mx-8 h-fit`}
        >
          Verify OTP
        </Button>
        <Flex justify="center">
          <Typography className={``}>Don’t have a code?&nbsp;</Typography>
          <Link href={"#"} className={`text-mainColor text-[14px]`}>
            Resend code
          </Link>
        </Flex>
        <Flex justify="center" className={`gap-x-1`}>
          <Image src={AuthReturnArrow} alt="AuthReturnArrow" width={16} />
          <Link
            href={`/auth/signin`}
            className={`text-[14px]/[22px] font-semibold`}
          >
            Return to sign in
          </Link>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}
