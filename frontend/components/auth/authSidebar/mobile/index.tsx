import Image from "next/image";
import { Flex, Typography } from "antd";
import Logo from "@/public/img/Logomark.svg";
import Illustration from "@/public/img/AuthSidebarIllustration.svg";
import AuthLeftArrow from "@/public/img/auth/arrow-left-s-line.svg";

export default function MobileRightSidebar() {
  return (
    <>
      <Flex align="center" className={`w-full h-11 gap-x-8`}>
        <Flex align="center" className="ml-4 w-[58px] flex justify-between">
          <Image src={AuthLeftArrow} alt="AuthLeftArrow" width={20} />
          <Typography className="text-[14px]/[21px] text-mainColor font-semibold">
            Back
          </Typography>
        </Flex>
        <Flex align="center" className="w-[133.6px] gap-x-[6.4px]">
          <Image src={Logo} alt="Logo" width={25.6} />
          <Typography className="text-mainColor text-[14.4px]/[27.43px] font-bold">
            WeThePeople
          </Typography>
        </Flex>

        {/* <Flex className={`pt-[181px]`} vertical align={"center"}>
          <Flex vertical className={`px-[140px] pb-5`}>
            <Typography className={`mb-5 text-mainColor font-bold text-[32px]`}>
              Start Your Success Story
            </Typography>
            <Typography className={``}>
              Innovate, Earn, and Grow with Blockchain on{" "}
              <span className={`text-mainColor`}>WeThePeople</span>. Dive into a
              world where your freelance work is safeguarded and rewarded like
              never before. Join us and transform your potential into success.
            </Typography>
          </Flex>
          <Flex className={`px-32 relative`}>
            <Image src={Illustration} alt="Illustration" className="mx-auto" />
          </Flex>
        </Flex> */}
      </Flex>
    </>
  );
}
