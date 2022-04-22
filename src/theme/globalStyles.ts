import { globalCss } from '@stitches/react';

import { reset } from './reset.css';

const globalStyles = globalCss({
  ...reset,
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    outline: 'none',
    scrollBehavior: 'smooth',
  },

  body: {
    fontFamily: '$body',
    fontSize: '$base',
    color: '$highContrastText',
    backgroundColor: '$appBackground',
  },
});

export default globalStyles;
