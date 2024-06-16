"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Flex, Typography, Button } from "antd";

import classNames from "classnames";

import AuthHeader from "@/components/auth/header/Header-auth";
import WETPPassword from "@/components/auth/input/WETPPassword";
import SpinLoading from "@/components/general/SpinLoading";

import OTPVerified from "@/public/images/auth/OTPVerified.svg";
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";
import PasswordUpdated from "@/public/images/auth/PasswordUpdated.svg";

export default function Page() {
  const router = useRouter();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
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

  const onClickResetHandler = () => {
    setIsUpdated(true);
  };

  const onClickCancelHandler = () => {
    router.push("/input-otp/from-login");
  };

  const onClickContinueHandler = () => {
    setIsUpdated(false);
  };

  return (
    <>
      {loaded ? (
        <Flex vertical align="center" className="w-full">
          <AuthHeader />
          <Flex className="w-full lg:pt-20">
            <Flex className="w-full lg:max-w-[504px] py-4 lg:py-10 flex flex-col justify-center items-center gap-y-8 lg:gap-y-6 lg:mx-auto lg:shadow-lg lg:rounded-[16px]">
              <Image
                priority
                src={!isUpdated ? OTPVerified : PasswordUpdated}
                alt="OTPVerified"
                className={classNames(
                  "h-auto",
                  !isUpdated
                    ? "w-[200px] lg:w-[188px]"
                    : "w-[132px] lg:w-[86.58px] rounded-full shadow-xl"
                )}
              />
              <Flex className="w-full flex flex-col justify-center items-center gap-y-8 lg:gap-y-2 px-4 lg:py-4">
                <Typography className="text-[20px]/[30px] lg:text-[32px]/[48px] font-bold text-center">
                  {isUpdated
                    ? "Your Password has been Updated Successfully!"
                    : isMobile
                    ? "OTP Verified"
                    : "Email verified successfully!"}
                </Typography>
                <Typography
                  className={`text-[14px]/[22px] text-secondary text-center`}
                >
                  {isUpdated
                    ? `You'll be automatically redirected shortly. If the redirection doesn't happen within a few seconds, please click below to continue.`
                    : "You can now reset your password."}
                </Typography>
              </Flex>
              <Flex
                vertical
                className={classNames(
                  "w-full px-4 lg:px-6 gap-y-5",
                  isUpdated ? "hidden" : ""
                )}
              >
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
              <Flex
                vertical
                className={classNames(
                  "w-full px-4 lg:px-6 gap-y-6",
                  isUpdated ? "hidden" : ""
                )}
              >
                <Flex vertical className={`w-full gap-y-3`}>
                  <Button
                    onClick={onClickResetHandler}
                    className={`bg-main text-[white] text-[15px]/[26px] font-bold flex justify-center items-center h-12`}
                  >
                    Reset Password
                  </Button>
                  <Button
                    onClick={onClickCancelHandler}
                    className="text-secondary text-[15px]/[26px] font-bold flex justify-center items-center h-12"
                  >
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
                    href="/login"
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
              <Flex
                vertical
                className={classNames(
                  "w-full px-4 lg:px-6 gap-y-6",
                  !isUpdated ? "hidden" : ""
                )}
              >
                <Button
                  onClick={onClickContinueHandler}
                  className={`bg-main text-[white] text-[15px]/[26px] font-bold flex justify-center items-center h-12`}
                >
                  Continue
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <SpinLoading />
      )}
    </>
  );
}
