"use client";

import { useState, useEffect } from "react";

import { Flex, Input, ConfigProvider } from "antd";

import WETPHeader from "@/components/general/WETPHeader";
import WETPFooter from "@/components/general/WETPFooter";
import SpinLoading from "@/components/general/SpinLoading";

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
          <Flex className="w-full">
            <Flex className="w-full px-4 py-2">
              <ConfigProvider
                theme={{
                  token: {
                    fontSize: 12,
                  },
                  components: {
                    Input: {
                      lineHeight: 1,
                    },
                  },
                }}
              >
                <Input placeholder="Search transactions" />
              </ConfigProvider>
            </Flex>
          </Flex>
          <WETPFooter />
        </Flex>
      )}
    </>
  );
}
