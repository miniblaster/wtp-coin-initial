import Image from "next/image";
import { Flex, Typography } from "antd";
import Logo from "@/public/img/Logomark.svg";
import Illustration from "@/public/img/AuthSidebarIllustration.svg";
import AuthLeftArrow from "@/public/img/auth/arrow-left-s-line.svg";

export default function MobileRightSidebar() {
  return (
    <>
      <Flex justify="center" align="center" className={`w-full h-11 relative`}>
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
