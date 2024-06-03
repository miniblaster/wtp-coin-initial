import { Flex } from "antd";
import RightSidebar from "@/components/authSidebar";

interface ISidebarAuthLayoutProps {
  children: React.ReactNode;
}

export default function SidebarAuthLayout({
  children,
}: Readonly<ISidebarAuthLayoutProps>) {
  return (
    <Flex className={`lg:h-screen lg:flex block`}>
      <RightSidebar />
      <Flex className={`lg:w-1/2 lg:flex hidden`}>{children}</Flex>
    </Flex>
  );
}
