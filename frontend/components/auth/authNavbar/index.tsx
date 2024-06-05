import { Flex, Typography } from "antd";
import Image from "next/image";
import Logo from "@/public/img/Logomark.svg";
import SettingIcon from "@/public/img/SettingIcon.svg";
import QuestionMark from "@/public/img/QuestionMark.svg";
import AuthLeftArrow from "@/public/img/auth/arrow-left-s-line.svg";

export default function AuthNavbar() {
  return (
    <>
      <Flex
        align="center"
        className="h-20 pl-14 pr-12 w-full hidden lg:flex justify-between absolute"
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
      <Flex
        justify="center"
        align="center"
        className={`w-full h-11 relative flex lg:hidden`}
      >
        <Image
          src={AuthLeftArrow}
          alt="AuthLeftArrow"
          width={32}
          className="ml-4 absolute left-0"
        />
        <Flex justify="center" className="w-full">
          <Flex align="center" className="gap-x-[6.4px]">
            <Image src={Logo} alt="Logo" width={25.6} />
            <Typography className="text-mainColor text-[14.4px]/[27.43px] font-bold">
              WeThePeople
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
