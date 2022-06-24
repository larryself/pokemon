import { FC, SVGProps } from 'react';

export const Sun: FC<SVGProps<SVGSVGElement>> = ({color='#232324'}) => (
  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10.46" cy="10" r="4" fill={color}/>
    <rect x="1.46" y="9" width="4" height="2" rx="1" fill={color}/>
    <rect x="15.46" y="9" width="4" height="2" rx="1" fill={color}/>
    <rect x="3.39" y="15.66" width="4" height="2" rx="1" transform="rotate(-45 3.4 15.66)" fill={color}/>
    <rect x="13.29" y="5.76" width="4" height="2" rx="1" transform="rotate(-45 13.3 5.76)" fill={color}/>
    <rect x="3.39" y="4.34" width="2" height="4" rx="1" transform="rotate(-45 3.4 4.34)" fill={color}/>
    <rect x="13.29" y="14.24" width="2" height="4" rx="1" transform="rotate(-45 13.3 14.24)" fill={color}/>
    <rect x="9.46" y="1" width="2" height="4" rx="1" fill={color}/>
    <rect x="9.46" y="15" width="2" height="4" rx="1" fill={color}/>
  </svg>
)
