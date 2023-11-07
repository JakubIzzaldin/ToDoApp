import {
  PlacementWithLogical,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
} from '@chakra-ui/react';

import {staticColors} from '../../constants/colors';
import React, {ReactNode} from 'react';

type AppPopoverProps = {
  anchor: ReactNode;
  children: ReactNode;
  placement?: PlacementWithLogical;
  popoverContent?: PopoverContentProps;
  isOpen?: boolean;
} & Pick<PopoverProps, 'isOpen'>;
export const AppPopover = ({
  anchor,
  children,
  placement,
  popoverContent,
  isOpen,
}: AppPopoverProps) => (
  <Popover placement={placement} isOpen={isOpen}>
    <PopoverTrigger>{anchor}</PopoverTrigger>
    <PopoverContent
      width={'216px'}
      border={`1px solid ${staticColors.borderGray}`}
      borderRadius={'8px'}
      boxShadow={'0px 8px 16px 0px #0000001F'}
      {...popoverContent}
    >
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </Popover>
);
