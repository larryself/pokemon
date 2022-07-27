import { FC, SVGProps } from 'react';

export const ArrowRight: FC<SVGProps<SVGSVGElement>> = () => (
  <svg width="33" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <path fillRule="evenodd" clipRule="evenodd"
            d="m17.202 25.023-15.954 16.6c-1.148 1.194-1.148 3.13 0 4.326l2.17 2.257a2.86 2.86 0 0 0 4.157 0l20.203-21.02a3.09 3.09 0 0 0 .824-1.683 3.133 3.133 0 0 0-.824-2.643L7.575 1.84a2.86 2.86 0 0 0-4.158 0l-2.17 2.258C.1 5.292.1 7.229 1.248 8.424l15.955 16.6Z"
            fill="#F2F2F2"/>
    </g>
    <defs>
      <filter id="a" x=".387" y=".945" width="32.252" height="52.157" filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix values="0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0.1 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1321_6036"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1321_6036" result="shape"/>
      </filter>
    </defs>
  </svg>

);