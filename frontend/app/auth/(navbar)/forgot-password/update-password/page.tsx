import { Button, Flex, Typography } from "antd";
import Image from "next/image";
import EmailVerifiedIllustration from "@/public/img/auth/EmailVerifiedIllustration.svg";
import Password from "antd/es/input/Password";
import Link from "next/link";

export default function UpdatePassword() {
  return (
    <Flex vertical className="w-full pt-4 gap-y-8">
      <Flex justify="center" className="w-full px-4">
        <Typography className="text-[20px]/[30px] font-bold">
          OTP Verified
        </Typography>
      </Flex>
      <Flex justify="center" className="px-20">
        <Image
          src={EmailVerifiedIllustration}
          alt="EmailVerifiedIllustration"
        />
      </Flex>
      <Flex justify="center" className="w-full px-4">
        <Typography className="text-base/[22px] text-secondary">
          You can now reset your password.{" "}
        </Typography>
      </Flex>
      <Flex vertical justify="center" className="w-full px-4 gap-y-5">
        <Flex vertical className="w-full gap-y-2 text-[12px]/[16px]">
          <Typography className="font-semibold mx-0.5">New Password</Typography>
          <Password className="px-[14px] py-3" />
        </Flex>
        <Flex vertical className="w-full gap-y-2 text-[12px]/[16px]">
          <Typography className="font-semibold mx-0.5">
            Confirm New Password
          </Typography>
          <Password className="px-[14px] py-3" />
        </Flex>
      </Flex>
      <Flex vertical justify="center" className="w-full px-4 gap-y-6">
        <Flex vertical className="w-full gap-y-3">
          <Button className="text-[white] bg-mainColor text-[15px]/[26px] py-[11px] h-fit">
            Reset Password
          </Button>
          <Button className="text-secondary text-[15px]/[26px] py-[11px] h-fit">
            Cancel
          </Button>
        </Flex>
        <Flex justify="center" align="center" className="w-full gap-x-1">
          <Typography className="text-[12px]/[16px] font-medium">
            Don&lsquo;t have a code?
          </Typography>
          <Link href="#" className="text-[14px]/[20px] text-mainColor">
            Resend code
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
