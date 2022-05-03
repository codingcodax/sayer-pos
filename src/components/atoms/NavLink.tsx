import { FC, ReactNode } from 'react';

import { A, Box, Text } from '../ui';

import Link from './Link';

interface NavLinkProps {
  href: string;
  name?: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, name, children }) => {
  return (
    <Box as='li'>
      <Link href={href}>
        <A
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&:hover>p': {
              color: '$primary9',
            },
          }}
          textDecoration='none'
        >
          {children}
          {name && (
            <Text css={{ fontSize: '$md', color: '$lowContrastText' }}>
              {name}
            </Text>
          )}
        </A>
      </Link>
    </Box>
  );
};

export default NavLink;
