import { ConfigProvider, Flex } from "antd";
import RightSidebar from "@/components/auth/authSidebar";
import MobileRightSidebar from "@/components/auth/authSidebar/mobile";

interface ISidebarAuthLayoutProps {
  children: React.ReactNode;
}

export default function SidebarAuthLayout({
  children,
}: Readonly<ISidebarAuthLayoutProps>) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlock: 12,
            paddingInline: 14,
          },
        },
      }}
    >
      <Flex className={`lg:h-screen lg:flex block`}>
        <Flex className={`w-1/2 lg:flex hidden`}>
          <RightSidebar />
        </Flex>

        <Flex
          justify="center"
          className={`w-full block lg:hidden bg-mainColor/[12%]`}
        >
          <MobileRightSidebar />
        </Flex>

        <Flex className={`lg:w-1/2 w-full lg:flex block`}>{children}</Flex>
      </Flex>
    </ConfigProvider>
  );
}
