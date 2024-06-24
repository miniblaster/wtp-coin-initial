"use client";
import { useState, useEffect } from "react";

import { Flex } from "antd";

import SpinLoading from "@/components/general/SpinLoading";
import ProfileHeader from "@/components/profile/header";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<string>("profile");

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
        <Flex>
          <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
      )}
    </>
  );
}
