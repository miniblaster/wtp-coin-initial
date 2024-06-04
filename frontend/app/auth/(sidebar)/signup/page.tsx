// "use server";

import Link from "next/link";
import Image from "next/image";
import { Flex, Typography, Input, Button } from "antd";
import Password from "antd/es/input/Password";

import TwitterLogo from "@/public/img/auth/Twitter.svg";
import LinkedInLogo from "@/public/img/auth/LinkedInLogo.svg";

export default function Signup() {
  return (
    <Flex vertical className={`w-full py-[166px] gap-y-14`}>
      <Flex className={` flex flex-col w-full gap-y-6 px-12`}>
        <Flex vertical className={`gap-y-4`} align="center">
          <Typography className="font-bold text-[24px]/[36px]">
            Let&lsquo;s get started
          </Typography>
          <Flex>
            <Typography className="text-[14px]/[22px], font-normal">
              Already have an account?&nbsp;
            </Typography>
            <Link href={"#"} className={`text-mainColor text-[14px]`}>
              Login
            </Link>
          </Flex>
        </Flex>
        <Flex vertical className="gap-y-6">
          {/* <Flex className={`w-full h-[90px] gap-4`}> */}
          <Flex vertical className={`w-full gap-y-3`}>
            <Flex align="center">
              <Typography
                className={`text-[16px] font-semibold`}
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                How shall we address you?&nbsp;
              </Typography>
              <Typography
                className={`text-[12px]/[12px] font-semibold text-secondary`}
              >
                (Optional)
              </Typography>
            </Flex>
            <Input
              placeholder="mrseneca"
              className={`py-4 px-[14px] text-[14px]/[22px]`}
            ></Input>
          </Flex>
          <Flex vertical className={`w-full gap-y-3`}>
            <Typography className={`text-[16px]/[24px] font-semibold`}>
              Claim Your Username!
            </Typography>
            <Input
              placeholder="Your last name"
              className={`py-4 px-[14px]`}
            ></Input>
            {/* </Flex> */}
          </Flex>
          <Flex className={`w-full h-[90px] gap-y-3`}>
            <Flex vertical className={`w-full justify-between`}>
              <Typography className={`text-[16px] font-semibold`}>
                Email
              </Typography>
              <Input
                type="email"
                placeholder="mrseneca@domain.com"
                className={`py-4 px-[14px] text-[14px]/[22px]`}
              ></Input>
            </Flex>
          </Flex>
          <Flex className={`w-full h-[90px] gap-y-3`}>
            <Flex vertical className={`w-full justify-between`}>
              <Typography className={`text-[16px] font-semibold`}>
                Password
              </Typography>
              <Password
                placeholder="Enter password"
                className={`py-4 px-[14px] text-[14px]/[22px]`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical className={`px-12 gap-y-6`}>
        <Button
          className={`flex justify-center items-center h-fit w-full py-[11px] bg-mainColor text-[15px]/[26px] text-[white] rounded-[14px]`}
        >
          Create Account
        </Button>
        <Typography className={`flex justify-center`}>
          By signing up, I agree to&nbsp;
          <Link href={`#`} className={`underline text-[black]`}>
            Terms of Use
          </Link>{" "}
          &nbsp;and&nbsp;
          <Link href={`#`} className={`underline text-[black]`}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </Flex>
      {/* <Flex
        vertical
        align="center"
        className={`px-16 h-[94px] justify-between`}
      >
        <Typography className={`text-secondary text-[14px]/[22px] pb-4`}>
          Try login through Social media
        </Typography>
        <Button
          className={`flex flex-row items-center py-4 px-7 h-fit rounded-[360px]`}
        >
          <Image src={LinkedInLogo} alt="LinkedInLogo" className="pr-2" />
          LinkedIn
        </Button>
      </Flex> */}
    </Flex>
  );
}
