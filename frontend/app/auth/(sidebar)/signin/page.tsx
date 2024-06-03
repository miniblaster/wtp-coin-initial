import { Button, Flex, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import TwitterLogo from "@/public/img/auth/Twitter.svg";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export default function Signin() {
  return (
    <Flex vertical className={`w-full px-16 py-[238px] gap-y-10`}>
      <Flex vertical>
        <Flex vertical align="center" className="w-full pb-10">
          <Typography className="text-[24px]/[36px] font-bold">
            Welcome!
          </Typography>
          <Typography className="text-[24px]/[36px] font-bold">
            Sign in to continue
          </Typography>
        </Flex>
        <Flex vertical className="gap-5">
          <Flex vertical className="gap-2">
            <Typography className="font-semibold text-[16px]/[24px]">
              Email
            </Typography>
            <Input
              placeholder="Enter email"
              className={`py-4 pl-[14px]`}
            ></Input>
          </Flex>
          <Flex vertical className="gap-2">
            <Typography className="font-semibold text-[16px]/[24px]">
              Password
            </Typography>
            <Input
              placeholder="Enter password"
              className={`py-4 pl-[14px]`}
              suffix={<EyeInvisibleOutlined />}
            ></Input>
          </Flex>
          <Link
            href={"#"}
            className="font-normal text-[14px]/[22px] flex justify-end"
          >
            Forgot password?
          </Link>
          <Button
            className={`flex justify-center items-center h-fit w-full py-[11px] bg-disabled/[16%] text-[15px]/[26px] font-bold text-secondary`}
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
      <Flex
        vertical
        align="center"
        className={`px-16 h-[94px] justify-between`}
      >
        <Typography className={`text-[#637381] text-[14px]/[22px] pb-4`}>
          Try login through Social media
        </Typography>
        <Button
          className={`flex flex-row items-center rounded-[360px] py-4 px-7 h-fit font-semibold`}
        >
          <Image src={TwitterLogo} alt="TwitterLogo" className="pr-2" />
          Twitter
        </Button>
      </Flex>
    </Flex>
  );
}
