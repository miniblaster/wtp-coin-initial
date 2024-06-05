import { ConfigProvider, Flex } from "antd";
import RightSidebar from "@/components/auth/authSidebar";

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
        <RightSidebar />

        <Flex className={`lg:w-1/2 w-full lg:flex block`}>{children}</Flex>
      </Flex>
    </ConfigProvider>
  );
}
