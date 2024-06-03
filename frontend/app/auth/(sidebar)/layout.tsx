import { Flex } from "antd";
import RightSidebar from "@/components/authSidebar";

export default function SidebarAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex className={`h-screen`}>
      <RightSidebar />
      <Flex className={`w-1/2`}>{children}</Flex>
    </Flex>
  );
}
