import {
  PlacementWithLogical,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";

import { staticColors } from "../../constants/colors";
import React, { ReactNode } from "react";

type AppPopoverProps = {
  anchor: ReactNode;
  children: ReactNode;
  placement?: PlacementWithLogical;
  popoverContent?: PopoverContentProps;
  onClose?: () => void;
  isOpen?: boolean;
  width?: string;
} & Pick<PopoverProps, "isOpen">;
export const AppPopover = ({
  anchor,
  children,
  placement,
  popoverContent,
  isOpen,
  width,
  onClose,
}: AppPopoverProps) => (
  <Popover placement={placement} isOpen={isOpen} onClose={onClose}>
    <PopoverTrigger>{anchor}</PopoverTrigger>
    <PopoverContent
      width={width}
      border={`1px solid ${staticColors.borderGray}`}
      borderRadius={"8px"}
      boxShadow={"0px 8px 16px 0px #0000001F"}
      {...popoverContent}
    >
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </Popover>
);
