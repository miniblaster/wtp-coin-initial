import Link from "next/link";
import Image from "next/image";
import { Flex, Typography, Input, Button } from "antd";
import TwitterLogo from "@/public/img/auth/Twitter.svg";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Signup() {
  return (
    <Flex vertical className={`w-full py-[148px] gap-y-14`}>
      <Flex className={` flex flex-col w-full gap-y-6 px-12`}>
        <Flex
          vertical
          className={`h-[74px] justify-between mb-4`}
          align="center"
        >
          <Typography className={`font-bold text-[24px]`}>
            Let&lsquo;s get started
          </Typography>
          <Flex>
            <Typography className={``}>
              Already have an account?&nbsp;
            </Typography>
            <Link href={"#"} className={`text-mainColor text-[14px]`}>
              Login
            </Link>
          </Flex>
        </Flex>
        <Flex className={`w-full h-[90px] gap-4`}>
          <Flex vertical className={` w-1/2 justify-between`}>
            <Typography className={`text-[16px] font-semibold`}>
              First Name
            </Typography>
            <Input
              placeholder="Your first name"
              className={`py-4 pl-[14px]`}
            ></Input>
          </Flex>
          <Flex vertical className={` w-1/2 justify-between`}>
            <Typography className={`text-[16px] font-semibold`}>
              Last Name
            </Typography>
            <Input
              placeholder="Your last name"
              className={`py-4 pl-[14px]`}
            ></Input>
          </Flex>
        </Flex>
        <Flex className={`w-full h-[90px] gap-4`}>
          <Flex vertical className={`w-full justify-between`}>
            <Typography className={`text-[16px] font-semibold`}>
              Email
            </Typography>
            <Input
              type="email"
              placeholder="Enter email"
              className={`py-4 pl-[14px]`}
            ></Input>
          </Flex>
        </Flex>
        <Flex className={`w-full h-[90px] gap-4`}>
          <Flex vertical className={`w-full justify-between`}>
            <Typography className={`text-[16px] font-semibold`}>
              Password
            </Typography>
            <Input
              type="email"
              placeholder="Enter password"
              className={`py-4 pl-[14px] flex justify-between`}
              suffix={<EyeInvisibleOutlined />}
            ></Input>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical className={`px-12 gap-y-6`}>
        <Button
          className={`flex justify-center items-center h-fit w-full py-[11px] bg-mainColor text-[15px]/[26px] text-[white]`}
        >
          Create Account
        </Button>
        <Typography className={`flex justify-center`}>
          By signing up, I agree to&nbsp;
          <Link href={`#`} className={`text-mainColor`}>
            Terms of Use
          </Link>{" "}
          &nbsp;and&nbsp;
          <Link href={`#`} className={`text-mainColor`}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </Flex>
      <Flex
        vertical
        align="center"
        className={`px-16 h-[94px] justify-between`}
      >
        <Typography className={`text-secondary text-[14px]/[22px] pb-4`}>
          Try login through Social media
        </Typography>
        <Button
          className={`flex flex-row items-center rounded-2xl py-4 px-7 h-fit`}
        >
          <Image src={TwitterLogo} alt="TwitterLogo" className="pr-2" />
          Twitter
        </Button>
      </Flex>
    </Flex>
  );
}
