import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';
import { Session } from '@supabase/supabase-js';
import cookie from 'js-cookie';

import authReducer, { initialState } from '~/store/reducers/authReducer';
import supabase from '~/lib/supabaseClient';
import { SIGN_IN } from '~/store/actions/authActions';

interface IAuthContext {
  authState: Session | {};
  authDispatch: Dispatch<null>;
}

export const AuthContext = createContext<IAuthContext>({
  authState: initialState,
  authDispatch: () => null,
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const newUser = supabase.auth.user();

        if (newUser) {
          await fetch('/api/auth', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ event, session }),
          });

          cookie.set('sayer-pos-auth', 'true', { expires: 1 });
          authDispatch({ type: SIGN_IN, payload: supabase.auth.session() });
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
