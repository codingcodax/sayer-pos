import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import AuthProvider from '~/context/AuthContext';
import globalStyles from '~/theme/globalStyles';
import { darkTheme } from '~/theme/config';
import { Page } from '~/components/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <AuthProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
