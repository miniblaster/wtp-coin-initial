import Image from "next/image";
import { Flex, Typography } from "antd";
import Logo from "@/public/img/Logomark.svg";
import Illustration from "@/public/img/AuthSidebarIllustration.svg";

export default function RightSidebar() {
  return (
    <>
      <Flex className={`w-full flex-col bg-mainColor/[0.16]`}>
        <Flex className={`px-8 py-4 items-center`}>
          <Image src={Logo} alt="Logomark" />
          <Typography
            className={`ml-3 font-bold text-[22.86px]/[34.29px] text-mainColor`}
          >
            WeThePeople
          </Typography>
        </Flex>
        <Flex className={`pt-[181px]`} vertical align={"center"}>
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
        </Flex>
      </Flex>
    </>
  );
}
