"use client";
//import from react/next
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import from antd
import { Flex, Typography, Spin, ConfigProvider, Button } from "antd";
import OTP from "antd/es/input/OTP";
import { LoadingOutlined } from "@ant-design/icons";

// import images
import Logomark from "@/public/images/auth/Logomark.svg";
import SendRequestIcon from "@/public/images/auth/SendRequest.svg";
import SettingIcon from "@/public/images/auth/ic-settings.svg";
import VerifySuccess from "@/public/images/auth/VerifySuccess.svg";

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
  const [isVerified, setIsVerified] = useState<boolean>(false);

  return (
    <>
      {loaded ? (
        isVerified ? (
          <Flex
            vertical
            align="center"
            className="w-full lg:relative lg:h-screen"
          >
            <Flex // Header
              align="center"
              className="w-full h-11 lg:h-[72px] flex justify-center lg:justify-between items-center lg:px-8 lg:shadow-md lg:absolute"
            >
              <Flex className="gap-x-[6.4px] lg:gap-x-[11.43px]">
                <Image
                  src={Logomark}
                  alt="Logomark"
                  className="w-[25.6px] lg:w-10 h-auto"
                />
                <Typography className="text-[14.4px]/[27.43px] lg:text-[22.86px]/[34.29px] font-bold text-main">
                  WeThePeople
                </Typography>
              </Flex>
              <Flex className="gap-x-2 hidden lg:flex">
                <Image
                  src={SettingIcon}
                  alt="SettingIcon"
                  className="w-6 h-auto"
                />
                <Typography className="text-secondary text-[14px]/[22px]">
                  Need Help?
                </Typography>
              </Flex>
            </Flex>
            <Flex // Main Content
              vertical
              className="flex justify-center items-center w-full lg:max-w-[504px] py-4 lg:py-10 gap-y-8 lg:my-auto lg:rounded-[16px] lg:shadow-md"
            >
              <Image
                priority
                src={SendRequestIcon}
                alt="SendRequest"
                className="w-[146px] h-auto"
              />
              <Flex vertical className="w-full px-4 gap-y-8 lg:gap-y-2">
                <Typography className="text-center text-[20px]/[30px] lg:text-[32px]/[48px] font-bold">
                  Verify Email
                </Typography>
                <Typography className="text-center text-[14px]/[24px] text-secondary">
                  We&apos;ve sent a 6-digit OTP confirmation code to your email.
                  Please enter the code in below box to verify your email.
                </Typography>
              </Flex>
              <Flex justify="center" className="w-full px-4">
                <ConfigProvider
                  theme={{
                    token: {},
                    components: {
                      Input: {
                        fontSize: isMobile ? 16 : 14,
                        lineHeight: isMobile ? 1.5 : 22 / 14,
                        paddingBlock: isMobile ? 12 : 16,
                        paddingInline: isMobile ? 17 : 27,
                      },
                    },
                  }}
                >
                  <OTP defaultValue="------" />
                </ConfigProvider>
              </Flex>
              <Flex vertical className="w-full px-4 gap-y-6">
                <Flex vertical className="w-full gap-y-3">
                  <Button
                    onClick={() => {
                      setIsVerified(!isVerified);
                    }}
                    className="text-[15px]/[26px] font-bold text-[white] bg-main py-[11px] h-fit"
                  >
                    Verify OTP
                  </Button>
                  <Button className="lg:hidden text-[15px]/[26px] font-bold text-secondary bg-[white] py-[11px] h-fit">
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
                  className="lg:flex hidden w-full gap-x-1"
                >
                  <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-medium">
                    Already have an account?
                  </Typography>
                  <Link href="#" className="text-[14px]/[20px] font-bold">
                    Login
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex vertical align="center" className="w-full">
            <Flex // Header
              align="center"
              className="w-full h-11 lg:h-[72px] flex justify-center lg:justify-between items-center lg:px-8 lg:shadow-md"
            >
              <Flex className="gap-x-[6.4px] lg:gap-x-[11.43px]">
                <Image
                  src={Logomark}
                  alt="Logomark"
                  className="w-[25.6px] lg:w-10 h-auto"
                />
                <Typography className="text-[14.4px]/[27.43px] lg:text-[22.86px]/[34.29px] font-bold text-main">
                  WeThePeople
                </Typography>
              </Flex>
              <Flex className="gap-x-2 hidden lg:flex">
                <Image
                  src={SettingIcon}
                  alt="SettingIcon"
                  className="w-6 h-auto"
                />
                <Typography className="text-secondary text-[14px]/[22px]">
                  Need Help?
                </Typography>
              </Flex>
            </Flex>
            <Flex // Main Content
              vertical
              align="center"
              className="w-full lg:max-w-[504px] lg:shadow-md lg:rounded-[16px] py-4 lg:py-5 gap-y-8 lg:gap-y-6 px-4 lg:px-6 lg:mt-20"
            >
              <Image
                priority
                src={VerifySuccess}
                alt="VerifySuccess"
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
        <Flex justify="center" align="center" className="w-screen h-screen">
          <Spin indicator={<LoadingOutlined className="text-[100px]" />} />
        </Flex>
      )}
    </>
  );
}
