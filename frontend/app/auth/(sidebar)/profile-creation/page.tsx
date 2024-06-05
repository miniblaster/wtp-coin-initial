"use client";
import { useEffect, useMemo, useState } from "react";
import { Flex, Typography, Switch, Select, ConfigProvider, Button } from "antd";
import Image from "next/image";
import { getAllISOCodes, getParamByISO } from "iso-country-currency";

import { languages } from "countries-list";

import UploadPhotoIllustration from "@/public/img/auth/UploadPhotoIllustration.svg";
import Link from "next/link";

export default function ProfileCreation() {
  const ISOCodes = useMemo(() => getAllISOCodes(), []);

  const [countries, setCountries] = useState<any[]>([]);
  const [country, setCountry] = useState<string | null>("");
  const [currency, setCurrency] = useState<string | null>("");
  const [languageList, setLanguageList] = useState<any[]>([]);
  const [preferedLanguage, setPreferedLanguage] = useState<string>("");

  useEffect(() => {
    let _countries: any[] = [];
    ISOCodes.map((ISOCode) => {
      _countries.push({ value: ISOCode.iso, label: ISOCode.countryName });
    });
    _countries.sort((a, b) => {
      if (a.label > b.label) return 1;
      else if (a.label < b.label) return -1;
      return 0;
    });
    setCountries(_countries);
    let _languages: any[] = [];
    let _languageList = Object.values(languages);
    _languageList.map((_language) => {
      _languages.push({
        value: _language.name,
        label: _language.name + ", " + _language.native,
      });
    });
    setLanguageList(_languages);
  }, []);

  const changeCountryHandler = (value: string) => {
    setCountry(value);
    setCurrency(getParamByISO(value, "currency"));
  };

  const changeLanguageHandler = (value: string) => {
    setPreferedLanguage(value);
  };

  return (
    <Flex vertical className="w-full">
      <Flex vertical className="w-full py-4 gap-y-4">
        <Flex className="w-full px-4">
          <Typography className="text-[20px]/[30px] font-bold text-center w-full">
            You&apos;re almost there!
          </Typography>
        </Flex>
        <Flex vertical align="center" className="py-4 gap-y-2 mx-4">
          <Image src={UploadPhotoIllustration} alt="UploadPhotoIllustration" />
          <Typography className="text-[12px]/[16px] text-disabled font-medium text-center">
            Allowed *.jpeg, *.jpg and*.png
            <br />
            Max size of 5 MB
          </Typography>
          <Flex align="center" className="gap-x-[9px] h-[38px]">
            <Typography className="text-base/[22px]">Public Profile</Typography>
            <Switch />
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical className="w-full px-4 py-3 gap-y-8">
        <Flex vertical className="w-full gap-y-5">
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  fontSize: 12,
                  lineHeight: 1.333,
                },
              },
            }}
          >
            <Flex vertical className="w-full gap-y-2">
              <Typography className="text-[12px]/[16px] font-semibold">
                Select Country<span className="text-[red]">*</span>
              </Typography>
              <Select
                options={countries}
                value={country}
                onChange={changeCountryHandler}
                placeholder="Select your country"
                className="text-[12px]/[16px] h-10"
              />
            </Flex>
            <Flex vertical className="w-full gap-y-2">
              <Typography className="text-[12px]/[16px] font-semibold">
                Local Currency
              </Typography>
              <Select
                disabled
                value={currency}
                className="text-[12px]/[16px] h-10"
              />
            </Flex>
            <Flex vertical className="w-full gap-y-2">
              <Typography className="text-[12px]/[16px] font-semibold">
                Prefered Language
              </Typography>
              <Select
                options={languageList}
                value={preferedLanguage}
                onChange={changeLanguageHandler}
                placeholder="Select your language of preference"
                className="text-[12px]/[16px] h-10"
              />
            </Flex>
          </ConfigProvider>
        </Flex>
        <Flex vertical gap={24}>
          <Flex vertical className="w-full gap-y-3">
            <Button className="text-[15px]/[26px] font-bold text-[white] py-[11px] h-fit bg-mainColor w-full">
              Verify OTP
            </Button>
            <Button className="text-[15px]/[26px] font-bold text-secondary py-[11px] h-fit w-full">
              Cancel
            </Button>
          </Flex>
          <Flex justify="center" align="center" gap={4}>
            <Typography className="text-[12px]/[16px] font-semibold">
              Don&lsquo;t have a code?
            </Typography>
            <Link href="#" className="text-[12px]/[16px] font-semibold">
              Resend code
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
