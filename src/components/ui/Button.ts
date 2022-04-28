import { styled } from '~/theme/config';

const Button = styled('button', {
  w: '$max',
  padding: '$4 $8',
  appearence: 'none',
  display: 'inline-block',
  fontSize: '$base',
  fontFamily: '$body',
  fontWeight: '$medium',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        color: '$appBackground',
        bg: '$primary9',
        transition: 'background $normal ease-in-out',

        '&:hover': {
          bg: '$primary10',
        },
      },
    },
  },
});

Button.displayName = 'Button';

export default Button;
