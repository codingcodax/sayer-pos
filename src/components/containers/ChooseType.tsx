import { FC } from 'react';

import { Box, Grid, Heading } from '~/components/ui';
import { Type } from '~/components/atoms';

interface ChooseTypesProps {
  types: string[];
  typeSelected: string | string[];
}

const ChooseType: FC<ChooseTypesProps> = ({ types, typeSelected }) => {
  return (
    <Box>
      <Heading as='h1' css={{ mt: '$8' }} variant='title'>
        Elige una categoria
      </Heading>
      <Grid
        css={{ mt: '$6', mb: '$8', columnGap: '$4', justifyContent: 'start' }}
        direction='horizontal'
      >
        {types.map((type) => (
          <Type key={type} type={type} typeSelected={typeSelected} />
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseType;
