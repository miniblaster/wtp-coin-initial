// import from react/next
import Image from "next/image";

// import from antd
import { Flex, Typography } from "antd";

// import images
import Logomark from "@/public/images/auth/Logomark.svg";
import SettingIcon from "@/public/images/auth/ic-settings.svg";

export default function AuthHeader() {
  return (
    <Flex // Header
      align="center"
      className="w-full h-11 lg:h-[72px] flex justify-center lg:justify-between items-center lg:px-8 lg:shadow-md"
    >
      <Flex className="gap-x-[6.4px] lg:gap-x-[11.43px]">
        <Image
          src={Logomark}
          alt="Logomark"
          className="w-[25.6px] lg:w-10 h-auto"
        />
        <Typography className="text-[14.4px]/[27.43px] lg:text-[22.86px]/[34.29px] font-bold text-main">
          WeThePeople
        </Typography>
      </Flex>
      <Flex className="gap-x-2 hidden lg:flex">
        <Image src={SettingIcon} alt="SettingIcon" className="w-6 h-auto" />
        <Typography className="text-secondary text-[14px]/[22px]">
          Need Help?
        </Typography>
      </Flex>
    </Flex>
  );
}
