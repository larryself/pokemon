import React, { useState } from 'react';
import { Container, InputField, Button, Box, Label, ButtonApply, Inner } from './style';

export const InputRange = ({title}: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputFieldFrom, setInputFieldFrom] = useState<string>('70000');
  const [inputFieldTo, setInputFieldTo] = useState<string>('50000');
  return (
    <Container onClick={() => {
      console.log('sdsd')

      return setIsOpen(false)
    }}>
      <div onClick={(event) => event.stopPropagation()}>
        <Button type={'button'} onClick={() => setIsOpen(prev => !prev)}>{title}</Button>
        <Box isOpen={isOpen}>
          <Inner>
            <div>
              <Label htmlFor={`inputFrom${title}`}>
                From
              </Label>
              <InputField id={`inputFrom${title}`} type="text" placeholder={'From...'} value={inputFieldFrom}
                          onChange={(e) => setInputFieldFrom(e.target.value)}/>
            </div>
            <div>
              <Label htmlFor={`inputTo${title}`}>
                To
              </Label>
              <InputField id={`inputTo${title}`} type="text" placeholder={'To...'} value={inputFieldTo}
                          onChange={(e) => setInputFieldTo(e.target.value)}/>
            </div>
          </Inner>
          <ButtonApply onClick={() => setIsOpen(prev => !prev)}>Apply</ButtonApply>
        </Box>
      </div>
    </Container>
  );
};
