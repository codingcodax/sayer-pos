import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import cookie from 'js-cookie';

export const EVENTS = {
  PASSWORD_RECOVERY: 'PASSWORD_RECOVERY',
  SIGNED_OUT: 'SIGNED_OUT',
  USER_UPDATED: 'USER_UPDATED',
};

export const VIEWS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
};

export const AuthContext = createContext({});

export const AuthProvider = ({
  supabase,
  children,
}: {
  supabase: SupabaseClient;
  children: ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<Session | null>(null);
  const [, setView] = useState(VIEWS.SIGN_IN);

  useEffect(() => {
    const activeSession = supabase.auth.session();
    setSession(activeSession);
    // @ts-ignore
    setUser(activeSession?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        // @ts-ignore
        setUser(currentSession?.user ?? null);

        switch (event) {
          case EVENTS.PASSWORD_RECOVERY:
            setView(VIEWS.UPDATE_PASSWORD);
            break;
          case EVENTS.SIGNED_OUT:
          case EVENTS.USER_UPDATED:
            setView(VIEWS.SIGN_IN);
            break;
          default:
        }

        // This is needed to set the cookie for SSR
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session: currentSession }),
        }).then((res) => res.json());

        cookie.set('sayer-pos-auth', 'true', { expires: 1 });
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [supabase.auth]);

  const signOut = () => {
    supabase.auth.signOut();
    cookie.remove('sayer-pos-auth');
  };

  return (
    <AuthContext.Provider value={{ session, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('useAuth must be use within an AuthProvider');

  return context;
};
