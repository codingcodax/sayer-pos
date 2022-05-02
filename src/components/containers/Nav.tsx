import { Divider, Grid } from '~/components/ui';
import {
  ClockIcon,
  HomeIcon,
  LogoSmallIcon,
  SettingsIcon,
  ShopIcon,
  WalletIcon,
} from '~/components/icons';

const Nav = () => {
  return (
    <Grid css={{ p: '$4', maxWidth: '100px' }}>
      <LogoSmallIcon />
      <Divider orientation='horizontal' />
      <HomeIcon />
      <ShopIcon />
      <ClockIcon />
      <WalletIcon />
      <SettingsIcon />
    </Grid>
  );
};

export default Nav;
