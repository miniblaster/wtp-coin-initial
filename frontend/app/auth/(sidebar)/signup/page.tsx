// "use server";

import Link from "next/link";
import { Flex, Typography, Input, Button, Checkbox } from "antd";
import Password from "antd/es/input/Password";
import Compact from "antd/es/space/Compact";

export default function Signup() {
  return (
    <>
      <Flex
        vertical
        className={`w-full lg:py-[166px] py-3 lg:gap-y-14 gap-y-8`}
      >
        <Flex vertical className={`w-full lg:gap-y-6 lg:px-12 px-4`}>
          <Flex vertical className={`gap-y-4 mb-7 lg:mb-0`} align="center">
            <Typography className="font-bold text-[24px]/[36px]">
              Let&lsquo;s get started
            </Typography>
            <Flex className="hidden lg:flex">
              <Typography className="text-[14px]/[22px], font-normal">
                Already have an account?&nbsp;
              </Typography>
              <Link href={"#"} className={`text-mainColor text-[14px]`}>
                Login
              </Link>
            </Flex>
          </Flex>
          <Flex vertical className="lg:gap-y-6 gap-y-5">
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
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
                className={`text-[14px]/[22px]`}
              ></Input>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px]/[24px] font-semibold`}>
                Claim Your Username!
              </Typography>
              <Compact className="">
                <Input
                  type="text"
                  addonBefore="wetp.com/"
                  placeholder="seneca.sage"
                  allowClear
                />
              </Compact>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px] font-semibold`}>
                Email
              </Typography>
              <Input
                type="email"
                placeholder="mrseneca@domain.com"
                className={`text-[14px]/[22px]`}
              ></Input>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px] font-semibold`}>
                Password
              </Typography>
              <Password
                placeholder="Enter password"
                className={`text-[14px]/[22px]`}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical className={`w-full lg:px-12 px-4 gap-y-6`}>
          <Button
            className={`flex justify-center items-center h-fit w-full py-[11px] bg-mainColor text-[15px]/[26px] text-[white] rounded-[14px]`}
          >
            Create Account
          </Button>
          <Checkbox className={`flex justify-center`}>
            By signing up, I agree to&nbsp;
            <Link href={`#`} className={`underline text-[black]`}>
              Terms of Use
            </Link>{" "}
            &nbsp;and&nbsp;
            <Link href={`#`} className={`underline text-[black]`}>
              Privacy Policy
            </Link>
            .
          </Checkbox>
        </Flex>
      </Flex>
    </>
  );
}
