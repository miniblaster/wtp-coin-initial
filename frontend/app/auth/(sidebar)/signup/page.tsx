// "use server";

import Link from "next/link";
import Image from "next/image";
import {
  Flex,
  Typography,
  Input,
  Button,
  Checkbox,
  ConfigProvider,
} from "antd";
import Password from "antd/es/input/Password";
import Compact from "antd/es/space/Compact";

import Illustration from "@/public/img/AuthSidebarIllustration.svg";

export default function Signup() {
  return (
    <>
      <Flex vertical className={`w-full bg-mainColor/[0.12] lg:hidden block`}>
        <Flex vertical align="center" className="w-full py-4 gap-y-4">
          <Flex vertical align="center" className="gap-y-2 px-4 w-full">
            <Typography className="font-bold text-[20px]/[30px] text-mainColor">
              Start Your Success Story
            </Typography>
            <Typography className="text-[12px]/[20px] text-center">
              Innovate, Earn, and Grow with Blockchain on{" "}
              <span className="text-mainColor">WeThePeople</span>. Dive into a
              world where your freelance work is safeguarded and rewarded like
              never before. Join us and transform your potential into success.
            </Typography>
          </Flex>
          <Image src={Illustration} alt="Illustration" className="px-[69px]" />
        </Flex>
      </Flex>
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
                className={`text-[14px]/[22px] px-[14px] py-3 lg:py-4`}
              ></Input>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px]/[24px] font-semibold`}>
                Claim Your Username!
              </Typography>
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      paddingBlock: 16,
                      paddingInline: 14,
                    },
                  },
                }}
              >
                <Compact className="">
                  <Input
                    type="text"
                    addonBefore="wetp.com/"
                    placeholder="seneca.sage"
                    allowClear
                    className="lg:flex hidden"
                  />
                </Compact>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      paddingBlock: 12,
                      paddingInline: 14,
                    },
                  },
                }}
              >
                <Compact className="">
                  <Input
                    type="text"
                    addonBefore="wetp.com/"
                    placeholder="seneca.sage"
                    allowClear
                    className="flex lg:hidden"
                  />
                </Compact>
              </ConfigProvider>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px] font-semibold`}>
                Email
              </Typography>
              <Input
                type="email"
                placeholder="mrseneca@domain.com"
                className={`text-[14px]/[22px] px-[14px] py-3 lg:py-4`}
              ></Input>
            </Flex>
            <Flex vertical className={`w-full lg:gap-y-3 gap-y-2`}>
              <Typography className={`text-[16px] font-semibold`}>
                Password
              </Typography>
              <Password
                placeholder="Enter password"
                className={`text-[14px]/[22px] px-[14px] py-3 lg:py-4`}
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
