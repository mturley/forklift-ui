import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import { BanIcon } from '@patternfly/react-icons';
import { global_disabled_color_100 as canceledColor } from '@patternfly/react-tokens';

// TODO add a custom icon prop to StatusIcon so repeating these flex props isn't necessary. Also maybe a built-in canceled type.
const CanceledIcon: React.FunctionComponent = () => (
  <Flex
    spaceItems={{ default: 'spaceItemsSm' }}
    alignItems={{ default: 'alignItemsCenter' }}
    flexWrap={{ default: 'nowrap' }}
    style={{ whiteSpace: 'nowrap' }}
  >
    <FlexItem>
      <BanIcon color={canceledColor.value} />
    </FlexItem>
    <FlexItem>Canceled</FlexItem>
  </Flex>
);

export default CanceledIcon;
