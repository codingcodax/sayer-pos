import { Svg } from '../ui';

const LogoSmall = ({ ...props }) => {
  return (
    <Svg fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M12 18v-3 3ZM10.07 2.82 3.14 8.37a3.37 3.37 0 0 0-1.11 2.91l1.33 7.96a3.19 3.19 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.43 3.43 0 0 0-1.11-2.91l-6.93-5.54a3.23 3.23 0 0 0-3.86-.01v0Z'
        stroke='#687076'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </Svg>
  );
};

// <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
// </svg>

export default LogoSmall;
