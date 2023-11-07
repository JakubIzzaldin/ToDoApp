import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, TabsProps} from '@chakra-ui/react';

import React, {ReactNode} from 'react';
import {getTextStyles} from '../AppText/helpers/getTextStyles';
export type AppTabsProps = {
  tabsConfig: {tabText: string; tabContent: ReactNode}[];
  tabTextStyleOveride?: TabsProps['style'];
};
export const AppTabs = ({tabTextStyleOveride, tabsConfig}: AppTabsProps) => {
  const resultTextStyle =
    tabTextStyleOveride || getTextStyles({color: 'dark', variant: 'body', fontWeight: 'medium'});

  const tabListElement = tabsConfig.map((item) => (
    <Tab style={resultTextStyle}>{item.tabText}</Tab>
  ));

  const tabPanelElement = tabsConfig.map((item) => <TabPanel px={0}>{item.tabContent}</TabPanel>);

  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>{tabListElement}</TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels p={'0px'}>{tabPanelElement}</TabPanels>
    </Tabs>
  );
};
