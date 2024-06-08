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
  Switch,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// import images
import Logomark from "@/public/images/auth/Logomark.svg";
import UploadPhoto from "@/public/images/auth/UploadPhoto.svg";

export default function Page() {
  const [loaded, setLoaded] = useState<boolean>(false);

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
                className="w-full h-11 lg:h-[72px] flex justify-center lg:justify-start items-center"
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
              <Flex // Upload
                vertical
                justify="center"
                align="center"
                className="w-full lg:h-full py-4 gap-y-4 lg:gap-y-20"
              >
                <Typography className="text-center text-xl/[30px] lg:text-[32px]/[48px] font-bold">
                  You&apos;re almost there!
                </Typography>
                <Flex className="flex flex-col items-center w-full px-4 lg:px-0 gap-y-2 lg:gap-y-5">
                  <Flex className="flex flex-col items-center py-4 gap-y-2">
                    <Image
                      src={UploadPhoto}
                      alt="Upload"
                      priority
                      className="w-[132px] h-auto"
                    />
                    <Typography className="text-[12px]/[16px] font-medium text-disabled">
                      Allowed *.jpeg, *.jpg and *.png Max size of 5 MB
                    </Typography>
                    <Flex className="flex flex-row gap-x-[9px]">
                      <Typography>Public Profile</Typography>
                      <Switch />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex // signup form
              vertical
              align="center"
              className="px-4 lg:px-12 py-3 gap-y-8 lg:gap-y-14 w-full lg:w-1/2 lg:my-auto"
            >
              <Flex vertical className="w-full gap-y-5">
                <Flex vertical className="w-full">
                  <Typography>
                    Select Country<span className="text-error">*</span>
                  </Typography>
                </Flex>
              </Flex>
              <Flex vertical className="w-full gap-y-6">
                <Flex vertical className="w-full gap-y-3">
                  <Button className="text-[white] font-bold py-[11px] bg-main h-fit w-full">
                    Create Account
                  </Button>
                  <Button className="text-secondary font-bold py-[11px] h-fit w-full">
                    Cancel
                  </Button>
                </Flex>
                <Flex // mobile view
                  justify="center"
                  className="w-full gap-x-1 lg:hidden"
                >
                  <Typography>Already have an account?</Typography>
                  <Link href="#" className="text-main">
                    Login
                  </Link>
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
