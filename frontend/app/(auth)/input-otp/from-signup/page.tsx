"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Flex, Typography, Button } from "antd";

import classNames from "classnames";

import WETPOTPInput from "@/components/auth/input/WETPOTPInput";
import SpinLoading from "@/components/general/SpinLoading";
import AuthHeader from "@/components/auth/header/Header-auth";

import OTPVerified from "@/public/images/auth/OTPVerified.svg";
import SendRequestIcon from "@/public/images/auth/SendRequest.svg";
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";

export default function Page() {
  const router = useRouter();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
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

  const onClickVerifyOTPHandler = () => {
    setIsVerified(true);
  };

  const onClickCancelHandler = () => {
    router.push("/profile-creation");
  };

  const onClickContinueHandler = () => {
    console.log("Continue button clicked");
  };

  return (
    <>
      {loaded ? (
        <Flex vertical align="center" className="w-full">
          <AuthHeader />
          <Flex // Main Content
            vertical
            className="flex justify-center items-center w-full lg:max-w-[504px] py-4 lg:py-10 lg:mt-20 gap-y-8 lg:rounded-[16px] lg:shadow-md"
          >
            <Image
              priority
              src={!isVerified ? SendRequestIcon : OTPVerified}
              alt="SendRequest"
              className={classNames(
                "lg:w-[188px] h-auto",
                !isVerified ? "w-[146px]" : "w-[200px]"
              )}
            />
            <Flex vertical className="w-full px-4 gap-y-8 lg:gap-y-2">
              <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                {isVerified
                  ? "Email verified successfully!"
                  : isMobile
                  ? "Password Request Sent Successfully!"
                  : "Verify Email"}
              </Typography>
              <Typography className="text-center text-[14px]/[24px] text-secondary">
                {!isVerified
                  ? "We've sent a 6-digit OTP confirmation code to your email. Please enter the code in below box to verify your email."
                  : "You'll be automatically redirected shortly. If the redirection doesn't happen within a few seconds, please click below to continue."}
              </Typography>
            </Flex>
            <Flex
              justify="center"
              className={classNames("w-full px-4", isVerified ? "hidden" : "")}
            >
              <WETPOTPInput />
            </Flex>
            <Flex vertical className="w-full px-4 gap-y-6">
              <Flex vertical className="w-full gap-y-3">
                <Button
                  onClick={onClickVerifyOTPHandler}
                  className={classNames(
                    "text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit",
                    isVerified ? "hidden" : ""
                  )}
                >
                  Verify OTP
                </Button>
                <Button
                  onClick={onClickContinueHandler}
                  className={classNames(
                    "text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit",
                    !isVerified ? "hidden" : ""
                  )}
                >
                  Continue
                </Button>
                <Button
                  onClick={onClickCancelHandler}
                  className={classNames(
                    "text-[15px]/[26px] font-bold text-secondary bg-[white] py-[11px] h-fit lg:hidden",
                    isVerified ? "hidden" : ""
                  )}
                >
                  Cancel
                </Button>
              </Flex>
              <Flex
                justify="center"
                align="center"
                className={classNames(
                  "w-full gap-x-1",
                  isVerified ? "hidden" : ""
                )}
              >
                <Typography className="text-[12px]/[16px] font-medium">
                  Don’t have a code?
                </Typography>
                <Link
                  href="#"
                  className="text-[14px]/[20px] text-main font-semibold"
                >
                  Resend code
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                className="w-full gap-x-1 hidden"
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
        <SpinLoading />
      )}
    </>
  );
}
