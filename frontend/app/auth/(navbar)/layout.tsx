import AuthNavbar from "@/components/auth/authNavbar";
import { Flex } from "antd";

interface INoSidebarAuthLayoutProps {
  children: React.ReactNode;
}

export default function NoSidebarAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex vertical className={`w-screen lg:h-screen`}>
      <AuthNavbar />
      <Flex className={`mx-auto my-auto`}>{children}</Flex>
    </Flex>
  );
}
