// import from antd
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function LoadingSpin() {
  return (
    <Flex justify="center" align="center" className="w-screen h-screen">
      <Spin indicator={<LoadingOutlined className="text-[100px]" />} />
    </Flex>
  );
}
