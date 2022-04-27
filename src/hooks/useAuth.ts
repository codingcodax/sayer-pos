// import { useContext } from 'react';
import cookie from 'js-cookie';

// import { AuthContext } from '~/context/AuthContext';
import supabase from '~/lib/supabaseClient';
// import { SIGN_IN } from '~/store/actions/authActions';

const useAuth = () => {
  // const { authDispatch } = useContext(AuthContext);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signIn({ email, password });

      if (error) console.error(error);

      // @ts-ignore
      // authDispatch({ type: SIGN_IN, payload: supabase.auth.session() });
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
