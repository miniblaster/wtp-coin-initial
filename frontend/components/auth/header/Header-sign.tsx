// import from react/next
import Image from "next/image";

// import from antd
import { Flex, Typography } from "antd";

// import images
import Logomark from "@/public/images/auth/Logomark.svg";

export default function SignHeader() {
  return (
    <Flex // Header
      className="w-full h-11 lg:h-[72px] bg-main/[12%] flex justify-center lg:justify-start items-center"
    >
      <Image
        src={Logomark}
        alt="Logomark"
        className="w-[25.6px] lg:w-10 h-auto mr-[6.4px] lg:ml-8"
      />
      <Typography className="text-[14.4px]/[27.43px] lg:text-[22.86px]/[34.29px] font-bold text-main">
        WeThePeople
      </Typography>
    </Flex>
  );
}
