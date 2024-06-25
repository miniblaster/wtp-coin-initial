import { Flex, Button } from "antd";

import classNames from "classnames";

interface IProfilePart {
  selectedPart?: string;
  setSelectedPart: (part: string) => void;
}

export default function ProfilePart({ selectedPart, setSelectedPart }: IProfilePart) {
  return (
    <Flex className="w-full justify-between items-center py-[7px] lg:py-4">
      <Flex className="items-center px-4 lg:px-0 lg:py-4 gap-x-3 lg:gap-x-4">
        <Button
          onClick={() => setSelectedPart("info")}
          className={classNames(
            "text-[12px]/[14px] lg:text-[14px]/[24px] px-3 lg:px-4 py-2 lg:py-3 h-fit",
            selectedPart === "info"
              ? "font-bold text-main border-main bg-main/[12%]"
              : "font-medium text-secondary border-secondary"
          )}
        >
          Profile Info
        </Button>
        <Button
          onClick={() => setSelectedPart("regional-settings")}
          className={classNames(
            "text-[12px]/[14px] lg:text-[14px]/[24px] px-3 lg:px-4 py-2 lg:py-3 h-fit",
            selectedPart === "regional-settings"
              ? "font-bold text-main border-main bg-main/[12%]"
              : "font-medium text-secondary border-secondary"
          )}
        >
          Regional Settings
        </Button>
        <Button
          onClick={() => setSelectedPart("external-wallet")}
          className={classNames(
            "text-[12px]/[14px] lg:text-[14px]/[24px] px-3 lg:px-4 py-2 lg:py-3 h-fit hidden lg:flex",
            selectedPart === "external-wallet"
              ? "font-bold text-main border-main bg-main/[12%]"
              : "font-medium text-secondary border-secondary"
          )}
        >
          Profile Info
        </Button>
        <Button
          onClick={() => setSelectedPart("wetp-wallet")}
          className={classNames(
            "text-[12px]/[14px] lg:text-[14px]/[24px] px-3 lg:px-4 py-2 lg:py-3 h-fit hidden lg:flex",
            selectedPart === "wetp-wallet"
              ? "font-bold text-main border-main bg-main/[12%]"
              : "font-medium text-secondary border-secondary"
          )}
        >
          WETP Wallet
        </Button>
      </Flex>
      <Button className="text-[15px]/[26px] font-bold bg-main px-4 py-[11px] h-fit text-[white] hidden lg:flex">
        Save Changes
      </Button>
    </Flex>
  );
}
