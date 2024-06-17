import { useState, useEffect } from "react";

import { Flex, Button, Typography } from "antd";

import classNames from "classnames";

import HomeIconSVG from "../svg/home/HomeIconSVG";
import MoreIconSVG from "../svg/home/MoreIconSVG";
import HistoryIconSVG from "../svg/home/HistoryIconSVG";
import ProfileIconSVG from "../svg/home/ProfileIconSVG";

export default function WETPFooter() {
  const [activeTab, setActiveTab] = useState<string>("home");

  return (
    <Flex align="center" className="w-full fixed bottom-0 bg-[white] z-10 h-[60px] lg:hidden">
      <Flex
        onClick={() => setActiveTab("home")}
        className="w-1/4 flex flex-col justify-center items-center py-2 gap-y-1"
      >
        <HomeIconSVG color={activeTab === "home" ? "#36309E" : "#919EAB"} />
        <Typography className={classNames("text-[14px]/[16px] mx-auto", activeTab === "home" ? "#36309E" : "919EAB")}>
          Home
        </Typography>
      </Flex>
      <Flex
        onClick={() => setActiveTab("history")}
        className="w-1/4 flex flex-col justify-center items-center py-2 gap-y-1"
      >
        <HistoryIconSVG color={activeTab === "history" ? "#36309E" : "#919EAB"} />
        <Typography
          className={classNames("text-[14px]/[16px] mx-auto", activeTab === "history" ? "#36309E" : "919EAB")}
        >
          History
        </Typography>
      </Flex>
      <Flex
        onClick={() => setActiveTab("profile")}
        className="w-1/4 flex flex-col justify-center items-center py-2 gap-y-1"
      >
        <ProfileIconSVG color={activeTab === "profile" ? "#36309E" : "#919EAB"} />
        <Typography
          className={classNames("text-[14px]/[16px] mx-auto", activeTab === "profile" ? "#36309E" : "919EAB")}
        >
          Profile
        </Typography>
      </Flex>
      <Flex
        onClick={() => setActiveTab("more")}
        className="w-1/4 flex flex-col justify-center items-center py-2 gap-y-1"
      >
        <MoreIconSVG color={activeTab === "more" ? "#36309E" : "#919EAB"} />
        <Typography className={classNames("text-[14px]/[16px] mx-auto", activeTab === "more" ? "#36309E" : "919EAB")}>
          More
        </Typography>
      </Flex>
    </Flex>
  );
}
