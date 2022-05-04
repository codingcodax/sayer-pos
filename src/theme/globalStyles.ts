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
    backgroundColor: '$subtleAppBackground',
  },

  '#__next': {
    height: '100vh',
    display: 'grid',
    gridTemplate: '1fr / auto 1fr',
    columnGap: '$8',
  },
});

export default globalStyles;
