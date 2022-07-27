import { FC, SVGProps } from 'react';
import { COLORS } from '../../../constants/colors';

export const Moon: FC<SVGProps<SVGSVGElement>> = ({color= COLORS.DARK_BLUE}) => (
  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 13A7.5 7.5 0 0 1 8.1 1.6c.25-.41-.1-.98-.56-.8A9 9 0 1 0 19.2 12.47c.18-.45-.39-.8-.8-.56A7.47 7.47 0 0 1 14.5 13Z"
      fill={color}
    />
    <path
      d="M11.5 2v1.36c0 .07.07.12.13.1l1.3-.42-1.3.42a.1.1 0 0 0-.05.15l.8 1.1-.8-1.1a.1.1 0 0 0-.16 0l-.8 1.1.8-1.1a.1.1 0 0 0-.05-.15l-1.3-.42 1.3.42a.1.1 0 0 0 .13-.1V2ZM12 6v.86c0 .07.07.12.13.1l.82-.27-.82.27a.1.1 0 0 0-.05.15l.5.7-.5-.7a.1.1 0 0 0-.16 0l-.5.7.5-.7a.1.1 0 0 0-.05-.15l-.82-.27.82.27a.1.1 0 0 0 .13-.1V6ZM15 4v.86c0 .07.07.12.13.1l.82-.27-.82.27a.1.1 0 0 0-.05.15l.5.7-.5-.7a.1.1 0 0 0-.16 0l-.5.7.5-.7a.1.1 0 0 0-.05-.15l-.82-.27.82.27a.1.1 0 0 0 .13-.1V4Z"
      fill={color}
    />
  </svg>
)
