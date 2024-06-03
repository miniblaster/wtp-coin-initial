import Image from "next/image";
import { Flex, Typography, Input, Button } from "antd";
import ForgotPasswordIllustration from "@/public/img/auth/ForgotPasswordIllustration.svg";
import AuthReturnArrow from "@/public/img/auth/ic-eva_arrow-ios-back-fill.svg";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Flex vertical className={`w-[420px] h-[626px] py-10 gap-y-10 shadow-lg`}>
      <Image
        alt="ForgotPasswordIllustration"
        src={ForgotPasswordIllustration}
        className={`mx-auto`}
      />
      <Flex vertical className={`px-6`}>
        <Typography align="center" className={`text-[32px]/[48px] font-bold`}>
          Forgot your password?
        </Typography>
        <Typography align="center" className={`text-secondary`}>
          Please enter the email address associated with your account, and
          we&lsquo;ll email you a link to reset your password.
        </Typography>
      </Flex>
      <Flex vertical className={`gap-y-6 px-6`}>
        <Input
          type="email"
          placeholder="Enter  your email address"
          className={`text-[14px]/[22px] text-disabled py-4 px-[14px]`}
        />
        <Button
          className={`bg-mainColor text-[white] text-[15px]/[26px] font-bold py-[11px] h-fit`}
        >
          Send Request
        </Button>
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
    </Flex>
  );
}
