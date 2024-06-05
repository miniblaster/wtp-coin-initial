import Image from "next/image";
import { Flex, Typography, Input, Button } from "antd";
import EmailVerifiedIllustration from "@/public/img/auth/EmailVerifiedIllustration.svg";
import AuthReturnArrow from "@/public/img/auth/ic-eva_arrow-ios-back-fill.svg";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Flex vertical align="center" className="pt-4 w-full gap-y-8">
      <Typography className="text-[20px]/[30px] font-bold">
        Forgot Password?
      </Typography>
      <Image alt="EmailVerifiedIllustration" src={EmailVerifiedIllustration} />

      <Typography className="text-[14px]/[22px] text-center text-secondary px-4">
        Please enter the email address associated with your account, and
        we&lsquo;ll email you a link to reset your password.
      </Typography>

      <Flex vertical align="start" className="w-full gap-y-2 px-4">
        <Typography className="text-[12px]/[16px] font-semibold">
          Enter Registered Email ID
        </Typography>
        <Input placeholder="sage.seneca@gmail.com" className="py-3 px-[14px]" />
      </Flex>

      <Flex className="w-full px-4">
        <Button className="text-[15px]/[26px] font-bold text-[white] bg-mainColor py-[11px] w-full h-fit">
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}
