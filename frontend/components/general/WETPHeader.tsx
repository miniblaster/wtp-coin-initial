import Image from "next/image";
import { useState } from "react";

import { Button, Flex, Typography } from "antd";

import classNames from "classnames";

import Logomark from "@/public/images/auth/Logomark.svg";
import MyWalletIcon from "@/public/images/general/MyWalletIcon.svg";
import LogoutIcon from "@/public/images/general/LogoutIcon.svg";
import Avatar_001 from "@/public/images/avatar/001.svg";

export default function WETPHeader() {
  const [activeTab, setActiveTab] = useState<string | null>("home");

  return (
    <Flex
      align="center"
      className="w-full h-11 lg:h-[72px] flex justify-center lg:justify-between gap-x-14 items-center lg:px-8"
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

      <Flex className="hidden lg:flex flex-grow justify-between items-center">
        <Flex className="flex gap-x-10">
          <Typography
            onClick={() => setActiveTab("home")}
            className={classNames(
              "text-[14px]/[22px] text-main font-semibold px-3 py-[13px] border-b-[3px] hover:cursor-pointer hover:border-main",
              activeTab === "home" ? "border-main" : "border-main/[0%]"
            )}
          >
            Home
          </Typography>
          <Typography
            onClick={() => setActiveTab("history")}
            className={classNames(
              "text-[14px]/[22px] text-main font-semibold px-3 py-[13px] border-b-[3px] hover:cursor-pointer hover:border-main",
              activeTab === "history" ? "border-main" : "border-main/[0%]"
            )}
          >
            History
          </Typography>
          <Typography
            onClick={() => setActiveTab("profile")}
            className={classNames(
              "text-[14px]/[22px] text-main font-semibold px-3 py-[13px] border-b-[3px] hover:cursor-pointer hover:border-main",
              activeTab === "profile" ? "border-main" : "border-main/[0%]"
            )}
          >
            Profile
          </Typography>
        </Flex>
        <Flex className="flex gap-x-8">
          <Button className="flex justify-center items-center gap-x-2 h-9 bg-main">
            <Image
              src={MyWalletIcon}
              alt="MyWalletIcon"
              className="w-5 h-auto"
            />
            <Typography className="text-[14px]/[24px] font-bold text-[white]">
              My Wallets
            </Typography>
          </Button>
          <Button className="flex items-center px-[9.6px] gap-x-4 h-9 w-[132px] bg-main/[8%]">
            <Image
              src={Avatar_001}
              alt="Avatar_001"
              className="w-[28.8px] h-auto"
            />
            <Flex className="flex items-center gap-x-1">
              <Image src={LogoutIcon} alt="Logout" className="w-4 h-auto" />
              <Typography className="text-[14px]/[22px] font-medium text-error">
                Logout
              </Typography>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
