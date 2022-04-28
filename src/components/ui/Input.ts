import { styled } from '~/theme/config';

const Input = styled('input', {
  p: '$4',
  h: '$full',
  w: '$full',
  fontSize: '$base',
  color: '$highContrastText',
  bg: '$subtleAppBackground',
  border: 'none',
  borderRadius: '$md',

  '&::placeholder': { color: '$lowContrastText' },

  '&:hover, &:focus': { borderColor: '$hoveredBorder' },

  '&:focus': { boxShadow: '$focus' },
});

Input.displayName = 'Input';

export default Input;
