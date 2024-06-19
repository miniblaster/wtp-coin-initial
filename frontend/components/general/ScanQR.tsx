"use client";

import Image from "next/image";
import { useState } from "react";

import classNames from "classnames";
import { Button, Flex, Typography, Modal } from "antd";

import ContentCopySVG from "../svg/ContentCopySVG";
import ShareQRIcon from "@/public/images/general/home/ShareQRIcon.svg";
import QRLargeIllustration from "@/public/images/general/home/QR-large.svg";

interface IScanQRProps {
  isScanQROpen?: boolean;
  setIsScanQROpen?: any;
}

export default function ScanQR({ isScanQROpen, setIsScanQROpen }: IScanQRProps) {
  const handleOk = () => {
    setIsScanQROpen(false);
  };

  const handleCancel = () => {
    setIsScanQROpen(false);
  };

  return (
    <>
      <Modal
        className="flex-col w-full px-[8px] lg:max-w-[440px]"
        title={<Typography className="p-3 text-[14px]/[22px] font-semibold">Scan to receive payment.</Typography>}
        open={isScanQROpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Flex key={"SendQR"} className="px-3 pb-4">
            <Button onClick={handleOk} className="flex justify-center items-center w-full gap-x-2 h-12 bg-main">
              <Image src={ShareQRIcon} alt="ShareQRIcon" className="w-5 h-auto" />
              <Typography className="text-[14px]/[16px] font-bold text-[white]">Share QR</Typography>
            </Button>
          </Flex>,
        ]}
      >
        <Flex className="flex-col justify-center items-center w-full px-3 py-4 gap-y-6">
          <Image src={QRLargeIllustration} alt="QRLargeIllustration" className="w-[286px] lg:w-[392px] h-auto" />
          <Flex className="justify-center items-center w-full gap-x-2">
            <Typography className="text-[14px]/[20px] font-medium">username: sage.seneca</Typography>
            <ContentCopySVG color="black" />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
