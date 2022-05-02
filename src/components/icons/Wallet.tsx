import { Svg } from '../ui';

const LogoSmall = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.01 17.75 7.05C20.33 7.35 22 9.26 22 12Z'
        stroke='#687076'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22M17.751 7.04996C17.511 7.00996 17.261 6.99996 17.001 6.99996H7.001C6.721 6.99996 6.451 7.01996 6.191 7.05996C6.331 6.77996 6.531 6.51996 6.771 6.27996L10.021 3.01996C10.681 2.36654 11.5722 2 12.501 2C13.4298 2 14.321 2.36654 14.981 3.01996L16.731 4.78996C17.371 5.41996 17.711 6.21996 17.751 7.04996V7.04996Z'
        stroke='#687076'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </Svg>
  );
};

// <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// </svg>

export default LogoSmall;
