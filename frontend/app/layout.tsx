"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import classNames from "classnames";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata: Metadata = {
  title: "WeTheWorld",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames("bg-[white]", poppins.className)}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: { fontFamily: poppins.style.fontFamily },
              components: {
                Input: { colorBgBase: "#ffffff" },
              },
            }}
          >
            <StyleProvider hashPriority="high">{children}</StyleProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
