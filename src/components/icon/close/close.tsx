import { FC, SVGProps } from 'react';
import { COLORS } from '../../../constants/colors';

export const Close: FC<SVGProps<SVGSVGElement>> = ({color = COLORS.DARK}) => (
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="35.5" height="9.2" rx="3" transform="scale(.99748 1.00251) rotate(45 2.9 8)" fill={color}/>
    <rect width="35.5" height="9.2" rx="3" transform="scale(-.99748 -1.00251) rotate(-45 -23.7 34.9)" fill={color}/>
  </svg>
)
