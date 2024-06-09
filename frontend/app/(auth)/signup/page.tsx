"use client";
// import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import from antd
import {
  Flex,
  Typography,
  Spin,
  Input,
  Checkbox,
  Button,
  ConfigProvider,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// import images
import Logomark from "@/public/images/auth/Logomark.svg";
import Banner from "@/public/images/auth/Banner.svg";

export default function Page() {
  const [loaded, setLoaded] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Flex className="w-full lg:h-screen flex flex-col lg:flex-row">
            <Flex className="w-full lg:w-1/2 flex flex-col">
              <Flex // Header
                className="w-full h-11 lg:h-[72px] bg-main/[12%] flex justify-center lg:justify-start items-center"
              >
                <Image
                  src={Logomark}
                  alt="Logomark"
                  className="w-[25.6px] lg:w-10 h-auto mr-[6.4px] lg:ml-8"
                />
                <Typography className="text-[14.4px]/[27.43px] lg:text-[22.86px]/[34.29px] font-bold text-main">
                  WeThePeople
                </Typography>
              </Flex>
              <Flex // Banner
                vertical
                justify="center"
                align="center"
                className="w-full lg:h-full py-4 gap-y-4 lg:gap-y-20 bg-main/[12%]"
              >
                <Flex className="flex flex-col w-full max-w-[480px] px-4 lg:px-0 gap-y-2 lg:gap-y-5">
                  <Typography className="text-center text-xl/[30px] lg:text-[32px]/[48px] font-bold text-main">
                    WETP: Tomorrow&apos;s currency, today!
                  </Typography>
                  <Typography className="text-center text-[12px]/[20px] lg:text-[14px]/[20px]">
                    Be part of the{" "}
                    <span className="text-main font-bold">WETP</span>{" "}
                    revolution. Secure your financial future with a stable
                    currency.
                  </Typography>
                </Flex>
                <Image
                  src={Banner}
                  alt="Banner"
                  priority
                  className="w-[222px] lg:w-[504px] h-auto"
                />
              </Flex>
            </Flex>
            <Flex // signup form
              vertical
              align="center"
              className="px-4 lg:px-12 py-3 gap-y-8 lg:gap-y-14 w-full lg:w-1/2 lg:my-auto"
            >
              <Flex vertical className="w-full gap-y-7 lg:gap-y-10">
                <Flex vertical className="w-full gap-y-4">
                  <Typography className="text-xl/[30px] font-bold lg:text-center">
                    Let&apos;s get started!
                  </Typography>
                  <Flex
                    justify="center"
                    className="w-full gap-x-1 hidden lg:flex"
                  >
                    <Typography>Already have an account?</Typography>
                    <Link href="#" className="text-main">
                      Login
                    </Link>
                  </Flex>
                </Flex>
                <Flex vertical className="w-full gap-y-5">
                  <ConfigProvider // mobile view
                    theme={{
                      token: {
                        lineHeight: 1.333,
                      },
                      components: {
                        Input: {
                          inputFontSize: isMobile ? 12 : 14,
                          paddingBlock: isMobile ? 12 : 16,
                          paddingInline: 14,
                        },
                      },
                    }}
                  >
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        Claim your Username!
                      </Typography>
                      <Input
                        addonBefore="wetp.com/"
                        placeholder="senesa.sage"
                      />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        How shall we address you?
                        <span className="text-secondary">(Optional)</span>
                      </Typography>
                      <Input placeholder="Alex" />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        Email
                      </Typography>
                      <Input placeholder="alexspensor@gmail.com" />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        Password
                      </Typography>
                      <Input placeholder="Enter password" />
                    </Flex>
                  </ConfigProvider>
                </Flex>
                <Flex className="w-full border-dashed border-[#C4CDD5] border px-3 py-1 text-xs/[20px] gap-x-2 lg:hidden">
                  <Checkbox>
                    By signing up, I agree to Terms of Use and Privacy Policy.
                  </Checkbox>
                </Flex>
              </Flex>
              <Flex vertical className="w-full gap-y-6">
                <Button className="text-[white] font-bold py-[11px] bg-main h-fit">
                  Create Account
                </Button>
                <Flex justify="center" className="w-full gap-x-1 lg:hidden">
                  <Typography>Already have an account?</Typography>
                  <Link href="#" className="text-main">
                    Login
                  </Link>
                </Flex>
                <Flex className="w-full border-dashed border-[#C4CDD5] border lg:border-none px-3 py-1 text-xs/[20px] gap-x-2 hidden lg:flex">
                  <Checkbox>
                    By signing up, I agree to Terms of Use and Privacy Policy.
                  </Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex justify="center" align="center" className="w-screen h-screen">
          <Spin indicator={<LoadingOutlined className="text-[100px]" />} />
        </Flex>
      )}
    </>
  );
}
