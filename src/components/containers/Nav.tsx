import { Divider, Grid } from '~/components/ui';
import {
  ClockIcon,
  HomeIcon,
  LogoSmallIcon,
  LogoutIcon,
  SettingsIcon,
  ShopIcon,
  WalletIcon,
} from '~/components/icons';
import { NavLink } from '~/components/atoms';

const Nav = () => {
  return (
    <Grid
      css={{
        p: '$4',
        pr: '$0',
        maxWidth: '100px',
        alignContent: 'space-between',
      }}
    >
      <Grid as='ul' css={{ p: '$0', listStyleType: 'none', gap: '$8' }}>
        <NavLink href='/dashboard'>
          <LogoSmallIcon css={{ h: '$12' }} />
        </NavLink>

        <Divider orientation='horizontal' />

        <NavLink href='/dashboard' name='Inicio'>
          <HomeIcon css={{ h: '$8' }} />
        </NavLink>

        <NavLink href='/products' name='Productos'>
          <ShopIcon css={{ h: '$8' }} />
        </NavLink>

        <NavLink href='/history' name='Historial'>
          <ClockIcon css={{ h: '$8' }} />
        </NavLink>

        <NavLink href='/wallet' name='Cartera'>
          <WalletIcon css={{ h: '$8' }} />
        </NavLink>

        <NavLink href='/settings' name='Ajustes'>
          <SettingsIcon css={{ h: '$8' }} />
        </NavLink>
      </Grid>

      <Grid as='ul' css={{ p: '$0', listStyleType: 'none' }}>
        <NavLink href='/logout' name='Salir'>
          <LogoutIcon css={{ h: '$8' }} />
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Nav;
