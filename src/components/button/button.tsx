import React, { FC } from 'react';
import { Container } from './style';

interface Props {
  text: string,
  color: string,
  linkTo: string
}

export const Button: FC<Props> = ({text, color, linkTo}) => {
  return (
    <Container color={color} href={linkTo}>
      {text}
    </Container>
  );
};
