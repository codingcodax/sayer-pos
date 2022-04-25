import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import globalStyles from '~/theme/globalStyles';
import { darkTheme } from '~/theme/config';
import { AuthProvider } from '~/lib/auth';
import supabase from '~/lib/supabaseClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <AuthProvider supabase={supabase}>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
