import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import globalStyles from '~/theme/globalStyles';
import { darkTheme } from '~/theme/config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
