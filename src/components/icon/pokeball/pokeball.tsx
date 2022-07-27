import React, { FC, SVGProps } from 'react';

export const Pokeball: FC<SVGProps<SVGSVGElement>> = () => (
  <svg width="21" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <path d="M14.55 11.446c2.282-2.318 2.282-6.076 0-8.394a5.782 5.782 0 0 0-8.267 0c-2.282 2.318-2.282 6.076 0 8.394a5.782 5.782 0 0 0 8.266 0Z" fill="#1D1E1D"/>
        <path d="M16.62 6.589C16.295 3.4 13.642.915 10.417.915 7.19.915 4.539 3.401 4.214 6.59H16.62Z" fill="url(#c)"/>
        <path d="M4.214 7.908c.325 3.188 2.978 5.674 6.203 5.674 3.224 0 5.878-2.486 6.202-5.674H4.214Z" fill="#E7E7E9"/>
        <path d="M10.416 9.244c1.086 0 1.966-.893 1.966-1.996 0-1.102-.88-1.995-1.966-1.995-1.085 0-1.965.893-1.965 1.995 0 1.103.88 1.996 1.965 1.996Z" fill="#1D1E1D"/>
        <path d="M10.416 8.808c.848 0 1.536-.699 1.536-1.56 0-.86-.688-1.559-1.536-1.559-.848 0-1.535.698-1.535 1.56 0 .86.687 1.559 1.535 1.559Z" fill="#F7F7F7"/>
        <path d="M10.416 8.3c.573 0 1.037-.47 1.037-1.052 0-.58-.464-1.052-1.037-1.052-.572 0-1.036.471-1.036 1.052 0 .581.464 1.053 1.036 1.053Z" fill="#B8B5B5"/>
        <path d="M10.416 8.223c.53 0 .96-.436.96-.975a.967.967 0 0 0-.96-.974c-.53 0-.96.436-.96.974 0 .539.43.975.96.975Z" fill="#F7F7F7"/>
      </g>
    </g>
    <defs>
      <linearGradient id="c" x1="17.672" y1="5.664" x2="6.489" y2="5.895" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B57E10"/>
        <stop offset=".241" stopColor="#B57E10"/>
        <stop offset=".404" stopColor="#F9DF7B"/>
        <stop offset=".594" stopColor="#FFF3A6"/>
        <stop offset=".781" stopColor="#F9DF7B"/>
        <stop offset="1" stopColor="#B57E10"/>
      </linearGradient>
      <
      clipPath id="b">
        <path fill="#fff" transform="translate(4.214 .915)" d="M0 0h12.406v12.667H0z"/>
      </clipPath>
      <filter id="a" x=".214" y=".915" width="20.406" height="20.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1337_11508"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1337_11508" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
