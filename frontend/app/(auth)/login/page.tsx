"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Flex,
  Typography,
  Input,
  Checkbox,
  Button,
  ConfigProvider,
} from "antd";

import Banner from "@/public/images/auth/Banner.svg";
import SignHeader from "@/components/auth/header/Header-sign";
import SpinLoading from "@/components/general/SpinLoading";

export default function Page() {
  const router = useRouter();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  const onClickLoginHandler = () => {
    console.log("Login clicked");
  };

  return (
    <>
      {loaded ? (
        <>
          <Flex className="w-full lg:h-screen flex flex-col lg:flex-row">
            <Flex className="w-full lg:w-1/2 flex flex-col">
              <SignHeader />
              <Flex // Banner
                vertical
                justify="center"
                align="center"
                className="w-full lg:h-full py-4 gap-y-4 lg:gap-y-20 bg-main/[12%]"
              >
                <Flex className="flex flex-col w-full max-w-[480px] px-4 lg:px-0 gap-y-2 lg:gap-y-5">
                  <Typography className="text-center text-[12px]/[20px] lg:text-[14px]/[20px]">
                    <span className="hidden lg:block">
                      Your journey towards financial freedom continues.
                    </span>
                    <span className="lg:hidden">
                      Log in and explore the full potential of{" "}
                    </span>
                    <span className="hidden lg:flex">
                      Log in and take advantage of all that&nbsp;
                      <Link href="#">WeThePeople</Link>
                      &nbsp;has to offer.
                    </span>
                    <span className="text-main font-bold lg:hidden">WETP</span>.
                    <span className="lg:hidden">
                      &nbsp;Connect your wallets, send payments, and more.
                    </span>
                  </Typography>
                </Flex>
                <Flex justify="center" className="w-full lg:px-32">
                  <Image
                    src={Banner}
                    alt="Banner"
                    priority
                    className="w-[222px] lg:w-full lg:max-w-[504px] h-auto"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex // signup form
              vertical
              align="center"
              className="px-4 lg:px-12 py-3 gap-y-8 lg:gap-y-14 w-full lg:w-1/2 lg:my-auto"
            >
              <Flex vertical className="w-full gap-y-7 lg:gap-y-10">
                <Flex vertical className="w-full gap-y-4">
                  <Typography className="text-xl/[30px] lg:text-[24px]/[36px] font-bold">
                    We&apos;ve Been Expecting You!
                  </Typography>
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
                    <Flex vertical className="w-full gap-y-2 lg:gap-y-3">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold flex items-center">
                        Username or Email&nbsp;
                        <span className="text-secondary hidden lg:flex text-[12px]/[12px]">
                          (Optional)
                        </span>
                      </Typography>
                      <Input
                        addonBefore="wetp.com/"
                        placeholder="senesa.sage"
                      />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2 lg:gap-y-3">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        Password
                      </Typography>
                      <Input.Password placeholder="Enter password" />
                    </Flex>
                    <Typography
                      onClick={() => {
                        router.push("/forgot-password");
                      }}
                      className="text-[12px]/[20px] font-medium text-main text-center"
                    >
                      Forgot Password?
                    </Typography>
                  </ConfigProvider>
                </Flex>
              </Flex>
              <Flex vertical className="w-full gap-y-6">
                <Button
                  onClick={onClickLoginHandler}
                  className="text-[white] font-bold py-[11px] bg-main h-fit text-[15px]/[26px]"
                >
                  Login
                </Button>
                <Flex justify="center" className="w-full gap-x-1">
                  <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-medium">
                    Don&apos;t have an account?
                  </Typography>
                  <Link
                    href="/signup"
                    className="text-main text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold"
                  >
                    Sign Up
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
        <SpinLoading />
      )}
    </>
  );
}
