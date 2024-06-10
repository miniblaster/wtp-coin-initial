"use client";
//import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import from antd
import { Flex, Typography, Spin, Button, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// import from components
import AuthHeader from "@/components/auth/header/Header-auth";
import LoadingSpin from "@/components/general/loadingSpin";

// import images
import OTPVerified from "@/public/images/auth/OTPVerified.svg";
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";

// import from other modules

export default function Page() {
  // Judge whether page loaded
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

  // Judge whether success or failed
  const [isVerified, setIsVerified] = useState<boolean>(true);

  return (
    <>
      {loaded ? (
        isVerified ? (
          <Flex
            vertical
            align="center"
            className="w-full lg:relative lg:h-screen"
          >
            <AuthHeader />
            <Flex // Main Content
              vertical
              className="flex justify-center items-center w-full lg:max-w-[504px] py-4 lg:py-10 gap-y-8 lg:mt-20 lg:rounded-[16px] lg:shadow-md"
            >
              <Image
                priority
                src={OTPVerified}
                alt="OTPVerified"
                className="w-[200px] lg:w-[188px] h-auto"
              />
              <Flex vertical className="w-full px-4 lg:px-6 gap-y-8 lg:gap-y-2">
                <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                  Forgot Password?
                </Typography>
                <Typography className="text-center text-[14px]/[24px] text-secondary">
                  Please enter the email address associated with your account,
                  and we&apos;ll email you a link to reset your password.
                </Typography>
              </Flex>
              <Flex
                vertical
                justify="center"
                className="w-full px-4 lg:px-6 gap-y-2 lg:gap-y-3"
              >
                <Typography className="text-xs lg:text-[14px]/[22px] font-semibold flex items-center">
                  Enter Registered Email ID
                </Typography>
                <Input
                  type="email"
                  placeholder="senesa.sage@gmail.com"
                  className="text-[12px]/[16px] px-[14px] py-3 lg:py-[19px]"
                />
              </Flex>
              <Flex vertical className="w-full px-4 lg:px-6 gap-y-6">
                <Flex vertical className="w-full gap-y-3">
                  <Button
                    onClick={() => {
                      setIsVerified(!isVerified);
                    }}
                    className="text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit"
                  >
                    Continue
                  </Button>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  className="w-full gap-x-1"
                >
                  <Link
                    href="#"
                    className="text-[14px]/[20px] font-semibold flex text-[black]"
                  >
                    <Image
                      src={BackArrowIcon}
                      alt="BackArrowIcon"
                      className="w-4 h-auto"
                    />
                    Return to sign in
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex vertical align="center" className="w-full lg:relative">
            <AuthHeader />
            <Flex // Main Content
              vertical
              align="center"
              className="w-full lg:max-w-[504px] lg:shadow-md lg:rounded-[16px] py-4 lg:py-5 gap-y-8 lg:gap-y-6 px-4 lg:px-6 lg:mt-20"
            >
              <Image
                priority
                src={OTPVerified}
                alt="OTPVerified"
                className="w-[200px] h-auto"
              />
              <Flex vertical align="center" className="w-full gap-y-8">
                <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                  Email verified successfully!
                </Typography>
                <Typography className="text-center text-[14px]/[24px] lg:text-[14px]/[22px] text-secondary">
                  You&apos;ll be automatically redirected shortly. If the
                  redirection doesn&apos;t happen within a few seconds, please
                  click below to continue.
                </Typography>
              </Flex>
              <Button
                onClick={() => {
                  setIsVerified(!isVerified);
                }}
                className="text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit w-full"
              >
                Continue
              </Button>
            </Flex>
          </Flex>
        )
      ) : (
        <LoadingSpin />
      )}
    </>
  );
}
