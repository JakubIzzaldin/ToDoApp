import { HStack, Icon } from "@chakra-ui/react";
import { AppText } from "../../../components/AppText/AppText";

import { IconType } from "react-icons";
import { TextColor } from "../../../components/AppText/types";
import { textColorMap } from "../../../components/AppText/constants";
export type PopoverButtonProps = {
  id: number;
  iconType: IconType;
  color: Extract<TextColor, "danger" | "dark">;
  iconColor?: string;
  text: string;
  onAction: (cardId: string, todoId: string) => void;
};
export const TodoOptionsButton = ({
  iconType,
  color,
  text,
  onClick,
  iconColor,
}: Omit<PopoverButtonProps, "onAction"> & { onClick: () => void }) => {
  const resultColor = textColorMap[color];
  return (
    <HStack
      width={"100%"}
      height={"36px"}
      onClick={onClick}
      gap={"12px"}
      cursor={"pointer"}
    >
      <Icon as={iconType} color={iconColor || resultColor} />
      <AppText variant={"bodyS"} color={color}>
        {text}
      </AppText>
    </HStack>
  );
};
export const PriorityOptionsButton = ({
  iconType,
  color,
  text,
  onClick,
  iconColor,
}: Omit<PopoverButtonProps, "onAction"> & { onClick: () => void }) => {
  const resultColor = textColorMap[color];
  return (
    <HStack
      width={"100%"}
      height={"36px"}
      onClick={onClick}
      gap={"12px"}
      cursor={"pointer"}
    >
      <Icon as={iconType} color={iconColor || resultColor} />
      <AppText variant={"bodyS"} color={color}>
        {text}
      </AppText>
    </HStack>
  );
};
