"use client";

// import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import from antd
import { Flex, Typography, Input, ConfigProvider, Button } from "antd";

// import from components
import AuthHeader from "@/components/auth/header/Header-auth";
import WETPPassword from "@/components/auth/input/Password";
import LoadingSpin from "@/components/general/loadingSpin";

// import from images
import OTPVerified from "@/public/images/auth/OTPVerified.svg";
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";
import PasswordUpdated from "@/public/images/auth/PasswordUpdated.svg";

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

  // Judge whether updated or not yet
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  return (
    <>
      {loaded ? (
        !isUpdated ? (
          <Flex vertical align="center" className="w-full">
            <AuthHeader />
            <Flex className="w-full lg:pt-20">
              <Flex // main content
                className="w-full lg:max-w-[504px] py-4 lg:py-10 flex flex-col justify-center items-center gap-y-8 lg:gap-y-6 lg:mx-auto lg:shadow-lg lg:rounded-[16px]"
              >
                <Image
                  priority
                  src={OTPVerified}
                  alt="OTPVerified"
                  className="w-[200px] lg:w-[188px] h-auto"
                />
                <Flex className="w-full flex flex-col justify-center items-center gap-y-8 lg:gap-y-2 px-4">
                  <Typography className="text-[20px]/[30px] lg:text-[32px]/[48px] font-bold text-center">
                    {isMobile ? "OTP Verified" : "Email verified successfully!"}
                  </Typography>
                  <Typography className="text-[14px]/[22px] text-secondary">
                    You can now reset your password.
                  </Typography>
                </Flex>
                <Flex vertical className="w-full px-4 lg:px-6 gap-y-5">
                  <Flex vertical className="w-full gap-y-2">
                    <Typography className="text-[12px]/[16px] font-semibold">
                      New Password
                    </Typography>
                    <WETPPassword />
                  </Flex>
                  <Flex vertical className="w-full gap-y-2">
                    <Typography className="text-[12px]/[16px] font-semibold">
                      Confirm Password
                    </Typography>
                    <WETPPassword />
                  </Flex>
                </Flex>
                <Flex vertical className="w-full px-4 lg:px-6 gap-y-6">
                  <Flex vertical className="w-full gap-y-3">
                    <Button
                      onClick={() => {
                        setIsUpdated(true);
                      }}
                      className="bg-main text-[white] text-[15px]/[26px] font-bold flex justify-center items-center h-12"
                    >
                      Reset Password
                    </Button>
                    <Button className="text-secondary text-[15px]/[26px] font-bold flex justify-center items-center h-12">
                      Cancel
                    </Button>
                  </Flex>
                  <Flex
                    justify="center"
                    align="center"
                    className="w-full gap-x-1"
                  >
                    <Typography className="text-[12px]/[16px] font-medium">
                      Don’t have a code?
                    </Typography>
                    <Link href="#" className="text-[14px]/[20px] font-semibold">
                      Resend code
                    </Link>
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
          </Flex>
        ) : (
          <Flex vertical align="center" className="w-full">
            <AuthHeader />
            <Flex className="w-full lg:pt-20">
              <Flex // main content
                className="w-full lg:max-w-[504px] py-4 lg:py-10 flex flex-col justify-center items-center gap-y-8 lg:gap-y-6 lg:mx-auto lg:shadow-lg lg:rounded-[16px]"
              >
                <Image
                  priority
                  src={PasswordUpdated}
                  alt="PasswordUpdated"
                  className="w-[132px] lg:w-[86.58px] h-auto rounded-full shadow-lg"
                />
                <Flex className="w-full flex flex-col justify-center items-center gap-y-8 lg:gap-y-2 px-4 lg:px-6 lg:py-4">
                  <Typography className="text-[20px]/[30px] lg:text-[32px]/[48px] font-bold text-center">
                    Your Password has been Updated Successfully!
                  </Typography>
                  <Typography className="text-[14px]/[22px] text-secondary text-center">
                    You&apos;ll be automatically redirected shortly. If the
                    redirection doesn&apos;t happen within a few seconds, please
                    click below to continue.
                  </Typography>
                </Flex>

                <Flex vertical className="w-full px-4 lg:px-6">
                  <Button
                    onClick={() => {
                      setIsUpdated(false);
                    }}
                    className="bg-main text-[white] text-[15px]/[26px] font-bold flex justify-center items-center h-12"
                  >
                    Continue
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )
      ) : (
        <LoadingSpin />
      )}
    </>
  );
}
