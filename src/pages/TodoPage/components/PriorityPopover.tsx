import { AppPopover } from "../../../components/AppPopover/AppPopover";
import { Box, HStack, Icon, Spacer } from "@chakra-ui/react";
import { AppText } from "../../../components/AppText/AppText";
import { useState } from "react";
import { WidgetPrioritiesType } from "./TodoWidget";
import { priorityColorsMap, priorityTextsMap } from "../constants";
import { staticColors } from "../../../constants/colors";
import { RiArrowDropDownLine } from "react-icons/ri";
import { sizes } from "../../../constants/sizes";

const priorityPopover: { priority: WidgetPrioritiesType; text: string }[] = [
  { priority: "high", text: "high" },
  { priority: "medium", text: "medium" },
  { priority: "low", text: "low" },
  { priority: "none", text: "none" },
];
type PriorityPopoverProps = {
  onClick: (priority: WidgetPrioritiesType) => void;
  priority: WidgetPrioritiesType;
};
export const PriorityPopover = ({
  priority,
  onClick,
}: PriorityPopoverProps) => {
  const [isPriorityPopoverOpen, setIsPriorityPopoverOpen] = useState<boolean>();
  const anchor = (
    <Box
      border={`1px solid ${staticColors.borderGray}`}
      width={sizes.priorityPopoverWidth}
      onClick={() => {
        setIsPriorityPopoverOpen(true);
      }}
      cursor={"pointer"}
      p={"8px"}
    >
      <HStack gap={"6px"}>
        <Box
          width={"10px"}
          height={"10px"}
          backgroundColor={priorityColorsMap[priority]}
          borderRadius={"100%"}
        />
        <AppText variant={"heading5"}>{priorityTextsMap[priority]}</AppText>
        <Spacer />
        <Icon as={RiArrowDropDownLine} />
      </HStack>
    </Box>
  );

  return (
    <AppPopover
      anchor={anchor}
      width={sizes.priorityPopoverWidth}
      isOpen={isPriorityPopoverOpen}
      onClose={() => {
        setIsPriorityPopoverOpen(false);
      }}
    >
      {priorityPopover.map((item) => (
          <Box>
            <HStack
              gap={"12px"}
              height={"25px"}
              cursor={"pointer"}
              onClick={() => {
                onClick(item.priority);
                setIsPriorityPopoverOpen(false);
              }}
            >
              {item.priority !== "none" && (
                <Box
                  width={"10px"}
                  height={"10px"}
                  backgroundColor={priorityColorsMap[item.priority]}
                  borderRadius={"100%"}
                />
              )}
              <AppText variant={"bodyS"}>{item.text}</AppText>
            </HStack>
          </Box>
        ))}
    </AppPopover>
  );
};
