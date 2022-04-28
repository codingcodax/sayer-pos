import { useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Box, Heading, Input, Label, Button } from '~/components/ui';
import { useAuth } from '~/hooks';

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [signIn] = useAuth();
  const { register, handleSubmit } = useForm<Inputs>();
  // const [formState, setFormState] = useState({ state: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setIsLoading(true);

    await signIn(email, password);

    router.push('/dashboard');

    setIsLoading(false);
  };

  return (
    <Box
      as='form'
      css={{ py: '$8', px: '$10', bg: '$appBackground', borderRadius: '$md' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading as='h1' css={{ mb: '$12' }}>
        Inicia sesion
      </Heading>

      <Box css={{ mb: '$4' }}>
        <Label>Correo</Label>
        <Input
          required
          autoComplete='email'
          id='email'
          placeholder='jimmy@choo.com'
          type='email'
          {...register('email')}
        />
      </Box>

      <Box css={{ mb: '$8' }}>
        <Label>Contrasena</Label>
        <Input
          required
          id='password'
          placeholder=''
          type='password'
          {...register('password')}
        />
      </Box>

      <Button css={{ w: '$full' }} type='submit' variant='primary'>
        {!isLoading ? 'Iniciar sesion' : 'Iniciando sesion...'}
      </Button>
    </Box>
  );
};

export default Login;
