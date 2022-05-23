import { FC } from 'react';

import { Grid } from '~/components/ui';
import { Type } from '~/components/atoms';

interface TypesProps {
  types: string[];
  typeSelected: string | string[];
}

const Types: FC<TypesProps> = ({ types, typeSelected }) => {
  return (
    <Grid
      css={{
        mt: '$6',
        pb: '$8',
        columnGap: '$4',
        justifyContent: 'start',
        overflowX: 'auto',
      }}
      direction='horizontal'
    >
      {types.map((type) => (
        <Type key={type} type={type} typeSelected={typeSelected} />
      ))}
    </Grid>
  );
};

export default Types;
