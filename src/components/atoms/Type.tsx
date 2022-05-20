import { FC } from 'react';

import { Center, Text } from '~/components/ui';
import { Link } from '~/components/atoms';

interface TypeProps {
  type: string;
  typeSelected: string | string[];
}

const Type: FC<TypeProps> = ({ type, typeSelected }) => {
  return (
    <Link href={`?type=${type}`}>
      <Center
        as='a'
        css={{
          py: '$4',
          px: '$6',
          w: '$min',
          textDecoration: 'none',
          bg: type === typeSelected ? '$primary3' : '$appBackground',
          border: `1px solid ${
            type === typeSelected ? '$primary6' : '$normalBorder'
          }`,
          borderRadius: '$md',
          transition: '$normal',
          transitionProperty: 'background-color, border-color',

          '&>p': {
            color:
              type === typeSelected ? '$highContrastText' : '$lowContrastText',
            transition: '$normal',
            transitionProperty: 'color',
          },

          '&:hover': {
            bg: type === typeSelected ? '$primary3' : '$subtleAppBackground',
            borderColor: type === typeSelected ? '$primary6' : '$hoveredBorder',
          },

          '&:hover>p': {
            color: '$highContrastText',
          },
        }}
      >
        <Text css={{ textTransform: 'capitalize' }} variant='secondary-text'>
          {type}
        </Text>
      </Center>
    </Link>
  );
};

export default Type;
