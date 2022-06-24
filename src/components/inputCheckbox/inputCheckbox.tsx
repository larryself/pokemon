import React, { useState } from 'react';
import { Container, InputField, Button, Box, Label, Checkbox } from './style';

const variables = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

export const InputCheckbox = ({title}: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container onBlur={() => {
      console.log('sdsd')

      return setIsOpen(false)
    }}>
      <div onClick={(event) => event.stopPropagation()}>
        <Button type={'button'} onClick={() => setIsOpen(prev => !prev)}>{title}</Button>
        <Box isOpen={isOpen}>
          {variables.map((item: string) => (
            <Label><InputField type="checkbox"/><Checkbox/>{item[0].toUpperCase() + item.slice(1)}</Label>))}
        </Box>
      </div>
    </Container>
  );
};

