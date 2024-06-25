"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Flex, Button, Typography, Switch, ConfigProvider, Input, Select } from "antd";

import classNames from "classnames";

import ProfilePart from "@/components/profile/part";
import ProfileHeader from "@/components/profile/header";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";
import SenesaAvatar from "@/public/images/avatar/senesa.svg";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [selectedPart, setSelectedPart] = useState<string>("info");

  const expertises = [
    "Cyber Security",
    "Law",
    "Content & Branding",
    "Human Resource",
    "Software Develop",
    "Product",
    "Consulting",
    "Finance",
    "Data",
    "Design",
    "Astrology",
    "Mental Health & Wellbeing",
    "Marketing",
    "Other",
  ];

  const skills = [
    "Project Management",
    "Team Player",
    "Time Management",
    "AI/ML",
    "Presentation",
    "Public Speaking",
    "Problem Solving",
    "Critical Thinking",
    "Decision Making",
    "Collaboration",
    "Engineering",
    "Data Analysis",
    "Organizational Skills",
    "Other",
  ];

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
          <Flex vertical className="w-full mt-11 lg:mt-[72px] mb-[60px] lg:mb-8 lg:px-40">
            <ProfilePart selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
            <Flex className="flex-col lg:flex-row w-full lg:border-focus/[24%] lg:shadow-xl lg:rounded-[16px]">
              <Flex className="w-full lg:w-1/3 lg:p-6 lg:bg-[#F9FAFB]">
                <Flex vertical className="w-full">
                  <Flex
                    vertical
                    className="w-full items-center lg:bg-[white] py-3 lg:py-[26px] lg:px-6 gap-y-4 lg:gap-y-6 lg:rounded-[16px]"
                  >
                    <Image src={SenesaAvatar} alt="senesa" priority className="w-27 h-auto" />
                    <Typography className="hidden lg:flex text-[12px]/[18px] text-disabled max-w-[180px] text-center">
                      Allowed *.jpeg, *.jpg and*.png Max size of 5 MB
                    </Typography>
                    <Flex className="justify-center items-center gap-x-[9px]">
                      <Typography>Public Profile</Typography>
                      <Switch />
                    </Flex>
                    <Button className="hidden lg:flex text-[14px]/[24px] text-error font-bold px-2 py-[6px] h-fit bg-error/[8%]">
                      Delete Account
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="w-full lg:w-2/3 px-4 py-3 lg:p-6">
                <Flex vertical className="w-full gap-y-4 lg:gap-y-8">
                  <ConfigProvider
                    theme={{
                      token: {
                        lineHeight: 1.333,
                      },
                      components: {
                        Input: {
                          inputFontSize: isMobile ? 12 : 14,
                          paddingBlock: isMobile ? 12 : 16,
                          paddingInline: 14,
                        },
                      },
                    }}
                  >
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        Claim your Username!
                      </Typography>
                      <ConfigProvider
                        theme={{
                          components: {
                            Input: {
                              paddingBlock: 11,
                              paddingInline: 16,
                              fontSize: 12,
                              lineHeight: 1.333,
                              addonBg: "#E3E2F6",
                            },
                          },
                        }}
                      >
                        <Input addonBefore="wetp.io/" placeholder="senesa.sage" />
                      </ConfigProvider>
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">
                        How shall we address you?&nbsp;
                        <span className={classNames("text-secondary", isMobile ? "hidden" : "")}>(Optional)</span>
                      </Typography>
                      <Input placeholder="Alex" />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">Email</Typography>
                      <Input type="email" placeholder="alexspensor@gmail.com" />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">Password</Typography>
                      <Input.Password placeholder="Enter password" />
                    </Flex>
                    <Flex vertical className="w-full gap-y-2">
                      <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">Email</Typography>
                      <Input type="email" placeholder="alexspensor@gmail.com" />
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
                    <Flex vertical className="hidden lg:flex w-full gap-y-4">
                      <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold">
                        Select your Expertise
                      </Typography>
                      <Flex className="w-full flex-wrap gap-x-3 gap-y-4">
                        {expertises.map((expertise, index) => (
                          <Button key={index} className="text-[14px]/[22px] py-[13px] rounded-full min-w-[112px] h-fit">
                            {expertise}
                          </Button>
                        ))}
                      </Flex>
                      <Flex vertical className="w-full gap-y-2">
                        <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">Please Specify</Typography>
                        <Input placeholder="What are you an expert in?" />
                      </Flex>
                    </Flex>
                    <Flex vertical className="hidden lg:flex w-full gap-y-4">
                      <Typography className="text-[12px]/[16px] lg:text-[14px]/[22px] font-semibold">
                        Select your Expertise
                      </Typography>
                      <Flex className="w-full flex-wrap gap-x-3 gap-y-4">
                        {skills.map((skill, index) => (
                          <Button key={index} className="text-[14px]/[22px] py-[13px] rounded-full min-w-[112px] h-fit">
                            {skill}
                          </Button>
                        ))}
                      </Flex>
                      <Flex vertical className="w-full gap-y-2">
                        <Typography className="text-xs lg:text-[14px]/[22px] font-semibold">Please Specify</Typography>
                        <Input placeholder="What are you skilled at?" />
                      </Flex>
                    </Flex>
                  </ConfigProvider>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <WETPFooter activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
      )}
    </>
  );
}
