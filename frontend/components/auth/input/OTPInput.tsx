"use client";

// import from react/next
import { useState, useEffect } from "react";

// import from antd
import { ConfigProvider } from "antd";
import OTP from "antd/es/input/OTP";

export default function OTPInput() {
  // Judge whether mobile view
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Input: {
            fontSize: isMobile ? 16 : 14,
            lineHeight: isMobile ? 1.5 : 22 / 14,
            paddingBlock: isMobile ? 12 : 16,
            paddingInline: isMobile ? 17 : 27,
          },
        },
      }}
    >
      <OTP defaultValue="------" />
    </ConfigProvider>
  );
}
