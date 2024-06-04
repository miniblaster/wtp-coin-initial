import { Flex, Typography } from "antd";
import Image from "next/image";
import Logo from "@/public/img/Logomark.svg";
import SettingIcon from "@/public/img/SettingIcon.svg";
import QuestionMark from "@/public/img/QuestionMark.svg";

export default function AuthNavbar() {
  return (
    <Flex
      align="center"
      className="h-20 pl-14 pr-12 w-full flex justify-between absolute"
    >
      <Flex align="center" className={`gap-x-3`}>
        <Image src={Logo} alt="Logo" width={42} />
        <Typography className={`text-[24px]/[36px] text-mainColor font-bold`}>
          WeThePeople
        </Typography>
      </Flex>
      <Flex align="center" className={`pr-1 gap-x-2`}>
        <Image src={SettingIcon} alt="SettingIcon" width={36} />
        <Typography>Need help</Typography>
        <Image alt="QuestionMark" src={QuestionMark} width={18} />
      </Flex>
    </Flex>
  );
}
