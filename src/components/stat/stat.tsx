import React, { FC } from 'react';
import { Container, StatValue } from "./style";

interface Props {
  value: string
  name:string
}

export const Stat:FC<Props> = ({value,name}) => {
  return (
    <Container>
      <StatValue>
        <p>{value}</p>
      </StatValue>
      <p>{name}</p>
    </Container>
  );
};
