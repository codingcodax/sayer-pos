import { styled } from '~/theme/config';

const Grid = styled('div', {
  display: 'grid',

  variants: {
    direction: {
      vertical: { gridAutoFlow: 'row' },
      horizontal: { gridAutoFlow: 'column' },
    },
  },
});

Grid.displayName = 'Grid';

export default Grid;
