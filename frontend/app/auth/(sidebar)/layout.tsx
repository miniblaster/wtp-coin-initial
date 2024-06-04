import { Flex } from "antd";
import RightSidebar from "@/components/auth/authSidebar";
import MobileRightSidebar from "@/components/auth/authSidebar/mobile";

interface ISidebarAuthLayoutProps {
  children: React.ReactNode;
}

export default function SidebarAuthLayout({
  children,
}: Readonly<ISidebarAuthLayoutProps>) {
  return (
    <Flex className={`lg:h-screen lg:flex block`}>
      <Flex className={`w-1/2 lg:flex hidden`}>
        <RightSidebar />
      </Flex>
      {/* <Flex className={`w-full flex lg:hidden`}>
        <MobileRightSidebar />
      </Flex> */}
      <Flex className={`lg:w-1/2 lg:flex hidden`}>{children}</Flex>
    </Flex>
  );
}
