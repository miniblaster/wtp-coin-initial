"use client";

import { useState, useEffect } from "react";

import { Flex, Input, ConfigProvider, Typography } from "antd";

import WETPHeader from "@/components/general/WETPHeader";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";
import SearchIconSVG from "@/components/svg/SearchIconSVG";
import TransactionsMobile from "@/components/general/TransactionsMobile";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
          <WETPHeader />
          <Flex // content
            vertical
            className="w-full"
          >
            <Flex // search
              className="w-full px-4 py-2 sticky top-11 z-10 lg:hidden bg-[white]"
            >
              <ConfigProvider
                theme={{
                  token: {
                    fontSize: 12,
                  },
                  components: {
                    Input: {
                      lineHeight: 1.5,
                      paddingBlock: 8,
                      paddingInline: 12,
                    },
                  },
                }}
              >
                <Input
                  addonBefore={<SearchIconSVG />}
                  placeholder="Search transactions"
                />
              </ConfigProvider>
            </Flex>
            <Flex vertical className="w-full px-4 py-3 gap-y-3 lg:hidden">
              <Typography className="text-[14px]/[14px] font-medium w-full">
                Today
              </Typography>
              <TransactionsMobile />
            </Flex>
            <Flex vertical className="w-full px-4 py-3 gap-y-3 lg:hidden">
              <Typography className="text-[14px]/[14px] font-medium w-full">
                Today
              </Typography>
              <TransactionsMobile />
            </Flex>
            <Flex vertical className="w-full px-4 py-3 gap-y-3 lg:hidden">
              <Typography className="text-[14px]/[14px] font-medium w-full">
                Today
              </Typography>
              <TransactionsMobile />
            </Flex>
          </Flex>
          <WETPFooter />
        </Flex>
      )}
    </>
  );
}
