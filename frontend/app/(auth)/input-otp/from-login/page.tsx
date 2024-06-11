"use client";
//import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// import from antd
import { Flex, Typography, Button } from "antd";

// import from components
import SpinLoading from "@/components/general/SpinLoading";
import OTPInput from "@/components/auth/input/OTPInput";
import AuthHeader from "@/components/auth/header/Header-auth";

// import images
import SendRequestIcon from "@/public/images/auth/SendRequest.svg";
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";

// import from other modules

export default function Page() {
  const router = useRouter();

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
  const [isVerified, setIsVerified] = useState<boolean>(false);

  // event handlers
  const onClickVerifyOTPHandler = () => {
    router.push("/reset-password");
  };
  const onClickCancelHandler = () => {
    router.push("/forgot-password");
  };

  return (
    <>
      {loaded ? (
        <Flex vertical align="center" className="w-full">
          <AuthHeader />
          <Flex // Main Content
            vertical
            className="flex justify-center items-center w-full lg:max-w-[504px] py-4 lg:py-10 gap-y-8 lg:my-20 lg:rounded-[16px] lg:shadow-md"
          >
            <Image
              priority
              src={SendRequestIcon}
              alt="SendRequest"
              className={`h-auto w-[146px] lg:w-[188px]`}
            />
            <Flex vertical className="w-full px-4 gap-y-8 lg:gap-y-2">
              <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                {isMobile
                  ? "Password Request Sent Successfully!"
                  : "Request sent successfully!"}
              </Typography>
              <Typography className="text-center text-[14px]/[24px] text-secondary">
                We&apos;ve sent a 6-digit OTP confirmation code to your email.
                Please enter the code in below box to verify your email.
              </Typography>
            </Flex>
            <Flex justify="center" className={`w-full px-4`}>
              <OTPInput />
            </Flex>
            <Flex vertical className="w-full px-4 gap-y-6">
              <Flex vertical className="w-full gap-y-3">
                <Button
                  onClick={onClickVerifyOTPHandler}
                  className="text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit"
                >
                  Verify OTP
                </Button>
                <Button
                  onClick={onClickCancelHandler}
                  className={`text-[15px]/[26px] font-bold text-secondary bg-[white] py-[11px] h-fit`}
                >
                  Cancel
                </Button>
              </Flex>
              <Flex justify="center" align="center" className="w-full gap-x-1">
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
              <Flex justify="center" className="w-full gap-x-1">
                <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-medium">
                  Already have an account?
                </Typography>
                <Link
                  href="/login"
                  className="text-main text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold"
                >
                  Login
                </Link>
              </Flex>
              <Flex justify="center" align="center" className="w-full gap-x-1">
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
          </Flex>
        </Flex>
      ) : (
        <SpinLoading />
      )}
    </>
  );
}
