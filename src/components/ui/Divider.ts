import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { styled } from '~/theme/config';

const Divider = styled(SeparatorPrimitive.Root, {
  bg: '$subtleBorder',
  '&[data-orientation=horizontal]': { height: 1, w: '$full' },
  '&[data0orientation=vertical]': { h: '$full', width: 1 },
});

export default Divider;
