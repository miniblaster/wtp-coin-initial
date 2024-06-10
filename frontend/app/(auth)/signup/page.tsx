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

// import from components
import Header from "@/components/auth/header/Header-0";
import LoadingSpin from "@/components/general/loadingSpin";

// import images
import Banner from "@/public/images/auth/Banner.svg";

export default function Page() {
  // Judge whether loaded
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1);
  }, []);

  // Judge whether mobile view
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

  return (
    <>
      {loaded ? (
        <>
          <Flex className="w-full lg:h-screen flex flex-col lg:flex-row">
            <Flex className="w-full lg:w-1/2 flex flex-col">
              <Header />
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
                      <Input addonBefore="wetp.io/" placeholder="senesa.sage" />
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
                      <Input.Password placeholder="Enter password" />
                    </Flex>
                  </ConfigProvider>
                </Flex>
                <Flex className="w-full border-dashed border-[#C4CDD5] border rounded-md px-3 py-1 text-xs/[20px] gap-x-2 lg:hidden">
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
                  <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-medium">
                    Already have an account?
                  </Typography>
                  <Link
                    href="#"
                    className="text-main text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold"
                  >
                    Login
                  </Link>
                </Flex>
                <Flex
                  justify="center"
                  className="w-full border-dashed border-[#C4CDD5] border lg:border-none px-3 py-1 text-xs/[20px] gap-x-2 hidden lg:flex"
                >
                  <Checkbox>
                    By signing up, I agree to{" "}
                    <Link href="#" className="text-[black] underline">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-[black] underline">
                      Privacy Policy
                    </Link>
                    .
                  </Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <LoadingSpin />
      )}
    </>
  );
}
