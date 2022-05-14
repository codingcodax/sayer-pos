import { Box, Grid, Text } from '~/components/ui';
import { Category } from '~/components/atoms';

const ChooseCategory = () => {
  return (
    <Box>
      <Text>Elige una categoria</Text>
      <Grid>
        <Category />
        <Category />
        <Category />
      </Grid>
    </Box>
  );
};

export default ChooseCategory;
