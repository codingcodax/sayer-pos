import type { NextPage } from 'next';
// import { useTheme } from 'next-themes';
import Head from 'next/head';

import { Center } from '~/components/ui';
import { Login } from '~/components/containers';

const Home: NextPage = () => {
  // const { theme, resolvedTheme, setTheme } = useTheme();
  //
  // const toggleTheme = () =>
  //   theme === 'dark' || resolvedTheme === 'dark'
  //     ? setTheme('light')
  //     : setTheme('dark');

  return (
    <Center css={{ h: '$full', bg: '$subtleAppBackground' }}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (document.cookie && document.cookie.includes('sayer-pos-auth')) { window.location.href = "/dashboard" }`,
          }}
        />
      </Head>

      <Login />
    </Center>
  );
};

export default Home;
