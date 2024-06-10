"use client";
//import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// import from antd
import { Flex, Typography, Button, Input } from "antd";

// import from components
import AuthHeader from "@/components/auth/header/Header-auth";
import SpinLoading from "@/components/general/SpinLoading";

// import images
import BackArrowIcon from "@/public/images/auth/arrow-ios-back-fill.svg";
import ForgotPassword from "@/public/images/auth/ForgotPassword.svg";

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

  return (
    <>
      {loaded ? (
        <Flex vertical align="center" className="w-full">
          <AuthHeader />
          <Flex // Main Content
            vertical
            className="flex justify-center items-center w-full lg:max-w-[504px] py-4 lg:py-10 gap-y-8 lg:mt-20 lg:rounded-[16px] lg:shadow-md"
          >
            <Image
              priority
              src={ForgotPassword}
              alt="ForgotPassword"
              className="w-[200px] lg:w-[188px] h-auto"
            />
            <Flex vertical className="w-full px-4 lg:px-6 gap-y-8 lg:gap-y-2">
              <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                Forgot Password?
              </Typography>
              <Typography className="text-center text-[14px]/[24px] text-secondary">
                Please enter the email address associated with your account, and
                we&apos;ll email you a link to reset your password.
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
                    router.push("/input-otp/from-login");
                  }}
                  className="text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit"
                >
                  Continue
                </Button>
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
