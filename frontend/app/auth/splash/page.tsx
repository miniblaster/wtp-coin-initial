import Image from "next/image";
import { Flex, Typography } from "antd";
import Logo from "@/public/img/Logomark.svg";

export default function Splash() {
  return (
    <Flex justify="center" align="center" className="w-screen h-screen">
      <Flex align="center" className="gap-x-[12.8px]">
        <Image src={Logo} alt="LogoIcon" width={51.2} />
        <Typography className="text-mainColor text-[28.8px]/[54.86px] font-bold">
          WeThePeople
        </Typography>
      </Flex>
    </Flex>
  );
}
