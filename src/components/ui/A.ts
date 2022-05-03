import { styled } from '~/theme/config';

const A = styled('a', {
  variants: {
    textDecoration: {
      none: { textDecoration: 'none' },
    },
  },
});

export default A;
