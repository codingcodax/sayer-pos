import cookie from 'js-cookie';

import supabase from '~/lib/supabaseClient';

const useAuth = () => {
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signIn({ email, password });

      if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = () => {
    supabase.auth.signOut();
    cookie.remove('sayer-pos-auth');
  };

  return [signIn, signOut];
};

export default useAuth;
