import { Button, Flex, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import TwitterLogo from "@/public/img/auth/Twitter.svg";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Password from "antd/es/input/Password";
import Illustration from "@/public/img/AuthSidebarIllustration.svg";

export default function Signin() {
  return (
    <>
      <Flex vertical className={`w-full bg-mainColor/[0.12] lg:hidden block`}>
        <Flex vertical align="center" className="w-full py-4 gap-y-4">
          <Flex vertical align="center" className="gap-y-2 px-4 w-full">
            <Typography className="font-bold text-[20px]/[30px] text-mainColor">
              Start Your Success Story
            </Typography>
            <Typography className="text-[12px]/[20px] text-center">
              Your journey towards financial freedom continues. Log in and take
              advantage of all that{" "}
              <span className="text-mainColor">WeThePeople</span>&nbsp;has to
              offer.
            </Typography>
          </Flex>
          <Image src={Illustration} alt="Illustration" className="px-[69px]" />
        </Flex>
      </Flex>
      <Flex vertical className={`w-full py-3 px-4 gap-y-8`}>
        <Flex vertical className="gap-y-7">
          <Typography className="text-[20px]/[30px] font-bold">
            We&lsquo;ve Been Expecting You!
          </Typography>
          <Flex vertical className="gap-y-5">
            <Flex vertical className="gap-y-2">
              <Typography className="text-[12px]/[16px] font-semibold">
                Username or Email
              </Typography>
              <Input
                placeholder="sage.seneca"
                className="text-[12px]/[16px] px-[14px] py-3"
              />
            </Flex>
            <Flex vertical className="gap-y-2">
              <Typography className="text-[12px]/[16px] font-semibold">
                Username or Email
              </Typography>
              <Input
                placeholder="sage.seneca"
                className="text-[12px]/[16px] px-[14px] py-3"
              />
            </Flex>
          </Flex>
          <Link
            href="#"
            className="flex justify-center text-[12px]/[20px] font-medium text-[black]"
          >
            Forgot Password?
          </Link>
        </Flex>
        <Flex vertical className="gap-y-6">
          <Button className="text-[15px]/[26px] font-bold text-[white] py-[11px] bg-mainColor h-fit">
            Create Account
          </Button>
          <Flex justify="center" align="center">
            <Typography>Don&lsquo;t have an account?&nbsp;</Typography>
            <Link href={"#"} className="text-[12px]/[16px] font-semibold">
              Sign Up
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
