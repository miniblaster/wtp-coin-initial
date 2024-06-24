"use client";
import { useState, useEffect } from "react";

import { Flex, Button } from "antd";

import classNames from "classnames";

import ProfilePart from "@/components/profile/part";
import ProfileHeader from "@/components/profile/header";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [selectedPart, setSelectedPart] = useState<string>("info");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1);
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

  return (
    <>
      {loading ? (
        <SpinLoading />
      ) : (
        <Flex vertical className="w-full">
          <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          <Flex vertical className="w-full mt-11 lg:mt-[72px] mb-[60px] lg:mb-0 lg:px-40">
            <ProfilePart selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
          </Flex>
          <WETPFooter activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
      )}
    </>
  );
}
