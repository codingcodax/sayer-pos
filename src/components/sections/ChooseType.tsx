import { FC } from 'react';

import { Box, Heading } from '~/components/ui';
import Types from '~/components/containers/Types';

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

      <Types typeSelected={typeSelected} types={types} />
    </Box>
  );
};

export default ChooseType;
