"use client";

// import from react/next
import { useState, useEffect } from "react";

// import from antd
import { Input, ConfigProvider } from "antd";

export default function WETPPassword() {
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
    <ConfigProvider // mobile view
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
      <Input.Password />
    </ConfigProvider>
  );
}
