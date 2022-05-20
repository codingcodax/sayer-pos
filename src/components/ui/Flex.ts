import { styled } from '~/theme/config';

const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      vertical: { flexDirection: 'row' },
      horizontal: { flexDirection: 'column' },
    },
    justify: {
      'space-between': {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: { alignItems: 'center' },
    },
  },
});

Flex.displayName = 'Flex';

export default Flex;
