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
      <Flex vertical align="center" className="w-full py-4 gap-y-4">
        <Flex vertical align="center" className="gap-y-2 px-4 w-full">
          <Typography className="font-bold text-[20px]/[30px] text-mainColor">
            Start Your Success Story
          </Typography>
          <Typography className="text-[12px]/[20px] text-center">
            Innovate, Earn, and Grow with Blockchain on{" "}
            <span className="text-mainColor">WeThePeople</span>. Dive into a
            world where your freelance work is safeguarded and rewarded like
            never before. Join us and transform your potential into success.
          </Typography>
        </Flex>
        <Image src={Illustration} alt="Illustration" className="px-[69px]" />
      </Flex>
    </>
  );
}
