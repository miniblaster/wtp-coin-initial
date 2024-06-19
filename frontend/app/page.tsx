"use client";

import { useState } from "react";

import classNames from "classnames";

import WETPHeader from "@/components/general/WETPHeader";
import ScanQR from "@/components/general/ScanQR";
import SendPayment from "@/components/general/SendPayment";

export default function Page() {
  const [isScanQROpen, setIsScanQROpen] = useState<boolean>(false);

  return <SendPayment />;
}
