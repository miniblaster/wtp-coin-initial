"use client";

import Image from "next/image";
import { Button, Modal, Typography, Flex, ConfigProvider, Input, Select } from "antd";

import Logomark from "@/public/images/auth/Logomark.svg";
import InfoMark from "@/public/images/general/InfoMark.svg";
import SendIcon from "@/public/images/general/SendIcon.svg";

interface ISendPaymentProps {
  isSendPaymentOpen?: boolean;
  setIsSendPaymentOpen?: any;
}

export default function SendPayment({ isSendPaymentOpen, setIsSendPaymentOpen }: ISendPaymentProps) {
  const handleOk = () => {
    setIsSendPaymentOpen(false);
  };

  const handleCancel = () => {
    setIsSendPaymentOpen(false);
  };

  return (
    <>
      <ConfigProvider>
        <Modal
          className="flex-col w-full lg:max-w-[516px] px-[8px]"
          title={
            <Flex className="w-full p-3">
              <Typography className="text-[14px]/[22px] font-semibold">Send payment</Typography>
            </Flex>
          }
          open={isSendPaymentOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Flex key={"SendPayment"} className="w-full p-3">
              <Button onClick={handleOk} className="flex justify-center items-center w-full gap-x-2 h-12 bg-main">
                <Image src={SendIcon} alt="SendIcon" className="w-5 h-auto" />
                <Typography className="text-[14px]/[16px] font-semibold text-[white]">Confirm and Send</Typography>
              </Button>
            </Flex>,
          ]}
        >
          <Flex className="flex-col justify-center items-center w-full px-3 py-4 gap-y-6">
            <Flex className="flex-col w-full p-3 gap-y-2 border border-dark rounded-[8px]">
              <Typography className="text-[12px]/[16px] font-medium w-full">Username</Typography>
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      inputFontSize: 14,
                      paddingBlock: 9,
                      paddingInline: 14,
                    },
                  },
                  token: {
                    lineHeight: 22 / 14,
                  },
                }}
              >
                <Input placeholder="mrseneca" />
              </ConfigProvider>
            </Flex>

            <Flex className="flex-col w-full p-3 gap-y-2 border border-dark rounded-[8px]">
              <Flex className="gap-x-2 items-center">
                <Typography className="text-[12px]/[16px] font-medium">Select currency to pay in</Typography>
                <Image src={InfoMark} alt="InfoMark" className="w-3 h-auto" />
              </Flex>
              <Flex className="border flex-col gap-y-2">
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        inputFontSize: 14,
                        paddingBlock: 8,
                        paddingInline: 8,
                        addonBg: "#443CC5",
                      },
                    },
                    token: {
                      fontSize: 14,
                      lineHeight: 22 / 14,
                    },
                  }}
                >
                  <Input
                    className="text-right "
                    addonBefore={
                      <ConfigProvider
                        theme={{
                          components: {
                            Select: {
                              optionSelectedColor: "white",
                              optionSelectedBg: "white",
                              optionSelectedFontWeight: 400,
                              optionActiveBg: "blue",
                              selectorBg: "red",
                            },
                          },
                          token: {
                            colorText: "white",
                          },
                        }}
                      >
                        <Select className="w-[124px] text-white">
                          <Select.Option key={"rupee"}>
                            <Typography className="text-primary">₹&nbsp;&nbsp;&nbsp;&nbsp;Rupee</Typography>
                          </Select.Option>
                          <Select.Option key={"dollar"}>
                            <Typography className="text-primary">$&nbsp;&nbsp;&nbsp;&nbsp;Dollar</Typography>
                          </Select.Option>
                        </Select>
                      </ConfigProvider>
                    }
                  />
                </ConfigProvider>

                <Flex className="w-full border-[1px] px-2 py-1 gap-x-4 rounded-[8px]">
                  <Flex className="w-1/2 border-r-[1px] border-darker">
                    <Input value={`$ 0.000`} className="text-[14px]/[22px] font-semibold text-darker border-none" />
                  </Flex>

                  <Flex className="w-1/2 gap-x-1">
                    <Image src={Logomark} alt="Logomark" className="w-3 h-auto" />
                    <Input value={"000.00000"} className="text-[14px]/[22px] font-semibold text-darker border-none" />
                  </Flex>
                </Flex>

                <Flex className="flex-col w-full p-2 gap-y-4 rounded-[8px] bg-primary/[12%]">
                  <Typography className="text-right text-[14px]/[18px] font-semibold border-b-darker text-darker">
                    Total: $ 0000000.0000
                  </Typography>
                  <Flex className="w-full justify-between">
                    <Typography className="text-[14px]/[16px] font-medium text-darker">Gas Price</Typography>
                    <Typography className="text-[14px]/[16px] font-medium text-darker">0000.0000</Typography>
                  </Flex>
                  <Flex className="w-full justify-between">
                    <Typography className="text-[14px]/[16px] font-medium text-darker">WetP Fee</Typography>
                    <Typography className="text-[14px]/[16px] font-medium text-darker">0000.0000</Typography>
                  </Flex>
                  <Flex className="w-full justify-between">
                    <Typography className="text-[14px]/[16px] font-medium text-darker">Other Cost</Typography>
                    <Typography className="text-[14px]/[16px] font-medium text-darker">0000.0000</Typography>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Modal>
      </ConfigProvider>
    </>
  );
}
