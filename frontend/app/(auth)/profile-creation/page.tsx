"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Flex, Typography, Button, Switch, Select, Input, ConfigProvider } from "antd";

import SpinLoading from "@/components/general/SpinLoading";
import AuthHeader from "@/components/auth/header/Header-auth";

import Flag from "react-world-flags";
import countryData from "iso-country-currency";
import { getParamByParam } from "iso-country-currency";

import UploadPhoto from "@/public/images/auth/UploadPhoto.svg";
import EndIcon from "@/public/images/auth/end icon.svg";

export default function Page() {
  const router = useRouter();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [localCurrency, setLocalCurrency] = useState<string>("");
  const [countryISOCode, setCountryISOCode] = useState<string>("");
  const [countryList] = useState<any[]>(countryData.getAllISOCodes());

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

  useEffect(() => {
    countryList.sort((a: any, b: any) => {
      if (a.countryName > b.countryName) {
        return 1;
      } else if (a.countryName < b.countryName) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  const changeCountryHandler = (value: any) => {
    setCountryISOCode(value);
    setLocalCurrency(getParamByParam("countryName", value, "currency"));
    console.log(value);
  };

  const countryFilterOption = (input: string, option?: { value: string }) =>
    (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

  const onClickNextHandler = () => {
    router.push("/input-otp/from-signup");
  };

  const onClickCancelHandler = () => {
    router.push("/signup");
  };

  return (
    <>
      {loaded ? (
        <>
          <Flex className="w-full flex flex-col">
            <AuthHeader />
            <Flex className="w-full flex flex-col">
              <Flex className="w-full flex flex-col lg:flex-row lg:px-16 lg:py-8 lg:gap-x-8 justify-between mb-4">
                <Flex vertical gap={16} className="hidden lg:flex w-[406px]">
                  <Typography className="text-[32px]/[48px] font-bold text-main">Hello mrseneca!</Typography>
                  <Typography className="text-[14px]/[22px]">
                    Tell us a bit about yourself – it&apos;ll help us tailor your experience.
                  </Typography>
                </Flex>
                <Flex
                  justify="center"
                  className="flex flex-col lg:flex-row lg:flex-grow lg:border border-focus/[24%] rounded-[16px]"
                >
                  <Flex
                    vertical
                    className="flex justify-center lg:justify-start items-center w-full lg:w-1/3 lg:px-6 py-4 lg:py-6 gap-y-4 lg:gap-y-20 lg:bg-[#F9FAFB] lg:rounded-l-[16px]"
                  >
                    <Typography className="text-center text-xl/[30px] lg:text-[32px]/[48px] font-bold lg:hidden">
                      You&apos;re almost there!
                    </Typography>
                    <Flex className="flex flex-col items-center w-full px-4 lg:px-0 gap-y-2 lg:gap-y-5 bg-[white] rounded-[16px]">
                      <Flex className="flex flex-col items-center py-4 gap-y-2 lg:gap-y-6 border lg:border-none rounded-[16px] border-focus/[24%] shadow-focus/[10%] shadow-2xl">
                        <Image priority src={UploadPhoto} alt="Upload" className="w-[132px] h-auto" />
                        <Flex className="w-full px-5 lg:px-6">
                          <Typography className="text-[12px]/[16px] font-medium text-disabled text-center w-full">
                            Allowed *.jpeg, *.jpg and *.png Max size of 5 MB
                          </Typography>
                        </Flex>
                        <Flex className="flex flex-row gap-x-[9px]">
                          <Typography>Public Profile</Typography>
                          <Switch />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    vertical
                    align="center"
                    className="px-4 lg:px-6 py-3 lg:py-6 gap-y-8 lg:gap-y-14 w-full lg:w-2/3"
                  >
                    <Flex vertical className="w-full gap-y-5 lg:gap-y-8">
                      <Flex className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-6">
                        <Flex vertical className="w-full gap-y-2">
                          <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold">
                            Select Country<span className="text-error">*</span>
                          </Typography>
                          <ConfigProvider
                            theme={{
                              components: {
                                Select: {},
                              },
                              token: {
                                controlHeight: isMobile ? 40 : 54,
                                controlPaddingHorizontal: isMobile ? 14 : 14,
                                fontSize: isMobile ? 12 : 14,
                                lineHeight: isMobile ? 1.333 : 1.71,
                              },
                            }}
                          >
                            <Select
                              showSearch
                              onChange={changeCountryHandler}
                              placeholder="Select your country"
                              filterOption={countryFilterOption}
                            >
                              {countryList.map((countryItem) => (
                                <Select.Option key={countryItem.iso} value={countryItem.countryName}>
                                  <Flex align="center" className="pl-3">
                                    <Flag
                                      code={countryItem.iso}
                                      width={20}
                                      fallback={<span>Unknown</span>}
                                      className="mr-2"
                                    />
                                    <Typography>{countryItem.countryName}</Typography>
                                  </Flex>
                                </Select.Option>
                              ))}
                            </Select>
                          </ConfigProvider>
                        </Flex>
                        <Flex vertical className="w-full gap-y-2">
                          <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold lg:text-secondary">
                            Local Currecy
                          </Typography>
                          <Input
                            value={localCurrency}
                            placeholder="Currency is auto selected based on country"
                            className="text-[12px]/[16px] lg:text-[14px]/[22px] text-secondary py-3 lg:py-4 px-[14px] lg:px-4 h-10 lg:h-[54px]"
                          ></Input>
                        </Flex>
                      </Flex>
                      <Flex vertical className="hidden lg:flex w-full gap-y-2">
                        <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold">
                          Short Title&nbsp;
                          <span className="text-[12px]/[12px] text-secondary">(Optional)</span>
                        </Typography>
                        <Input.TextArea
                          className="h-16 text-[14px]/[22px]"
                          placeholder="Tell us in short what describes you best"
                        />
                      </Flex>
                      <Flex vertical className="hidden lg:flex w-full gap-y-2">
                        <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold">
                          About Yourself&nbsp;
                          <span className="text-[12px]/[12px] text-secondary">(Optional)</span>
                        </Typography>
                        <Input.TextArea
                          className="h-[98px] text-[14px]/[22px]"
                          placeholder="Introduce yourself! Share a fun fact, a favorite quote, or whatever you like."
                        />
                      </Flex>
                    </Flex>

                    <Flex vertical className="w-full gap-y-6 lg:hidden">
                      <Flex vertical className="w-full gap-y-3">
                        <Button
                          onClick={onClickNextHandler}
                          className="text-[white] font-bold py-[11px] bg-main h-fit w-full"
                        >
                          Next
                        </Button>
                        <Button
                          onClick={onClickCancelHandler}
                          className="text-secondary font-bold py-[11px] h-fit w-full"
                        >
                          Cancel
                        </Button>
                      </Flex>
                      <Flex justify="center" className="w-full gap-x-1 lg:hidden">
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
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="w-full px-16 hidden lg:flex">
                <Flex className="w-full flex justify-end gap-x-6">
                  <Button
                    onClick={onClickCancelHandler}
                    className="text-main text-[15px]/[26px] font-bold flex justify-center items-center w-[116px] h-12"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onClickNextHandler}
                    className="bg-main flex justify-center items-center w-[116px] h-12"
                  >
                    <Typography className="text-[white] text-[15px]/[26px] font-bold">Next</Typography>
                    <Image src={EndIcon} alt="EndIcon" className="w-[24px] h-auto" />
                  </Button>
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
