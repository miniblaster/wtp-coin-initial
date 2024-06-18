"use client";

import Image from "next/image";
import { useState } from "react";

import classNames from "classnames";
import { Button, Flex, Typography, Modal } from "antd";

import ContentCopySVG from "../svg/ContentCopySVG";
import ShareQRIcon from "@/public/images/general/home/ShareQRIcon.svg";
import QRLargeIllustration from "@/public/images/general/home/QR-large.svg";

interface IScanQRProps {
  isScanQROpen?: boolean | undefined;
  setIsScanQROpen?: any;
}

export default function ScanQR({ isScanQROpen, setIsScanQROpen }: IScanQRProps) {
  // const [isScanQROpen, setIsScanQROpen] = useState<boolean>(false);

  const handleOk = () => {
    setIsScanQROpen(false);
  };

  const handleCancel = () => {
    setIsScanQROpen(false);
  };

  return (
    <>
      <Modal
        className="flex-col w-screen px-[8px]"
        title="Scan to receive payment."
        open={isScanQROpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key={"OK"}
            onClick={handleOk}
            className="flex justify-center items-center w-full gap-x-2 h-12 bg-main"
          >
            <Image src={ShareQRIcon} alt="ShareQRIcon" className="w-5 h-auto" />
            <Typography className="text-[14px]/[16px] font-bold text-[white]">Share QR</Typography>
          </Button>,
        ]}
      >
        <Flex className="flex-col justify-center items-center w-full px-3 py-4 gap-y-6">
          <Image src={QRLargeIllustration} alt="QRLargeIllustration" className="w-[286px] h-auto" />
          <Flex className="justify-center items-center w-full gap-x-2">
            <Typography className="text-[14px]/[20px] font-medium">username: sage.seneca</Typography>
            <ContentCopySVG color="black" />
          </Flex>
          {/* <Button className="flex justify-center items-center w-full gap-x-2 h-12 bg-main">
            <Image src={ShareQRIcon} alt="ShareQRIcon" className="w-5 h-auto" />
            <Typography className="text-[14px]/[16px] font-bold text-[white]">Share QR</Typography>
          </Button> */}
        </Flex>
      </Modal>
    </>
  );
}
