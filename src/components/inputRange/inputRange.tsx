import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Container, InputField, Button, Box, Label, ButtonApply, Inner, TitleInner, IconInner, Line } from './style';
import { ArrowDown } from 'components';

interface Props {
  title: string,
  onSubmit: (title: string, from: number, to: number) => void,
  value: number[],
}

export const InputRange: FC<Props> = ({title, onSubmit, value}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputFieldFrom, setInputFieldFrom] = useState<number>(value[0] || 0);
  const [inputFieldTo, setInputFieldTo] = useState<number>(value[1] || 1000);

  const ref = useRef<HTMLDivElement>(null);
  const handler = (e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleChangeTo = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const result = value.replace(/\D/g, '');
    setInputFieldTo(+result);
  };
  const handleChangeFrom = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const result = value.replace(/\D/g, '');
    setInputFieldFrom(+result);
  };
  const handleApply = () => {
    setIsOpen(prev => !prev);
    onSubmit(title, inputFieldFrom, inputFieldTo);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);
  return (
    <Container ref={ref}>
      <Button type={'button'} onClick={() => setIsOpen(prev => !prev)}>
        <TitleInner>{title}</TitleInner>
        <IconInner isOpen={isOpen}><ArrowDown/></IconInner>
      </Button>
      <Box isOpen={isOpen}>
        <Inner>
          <div>
            <Label htmlFor={`inputFrom${title}`}>
              From
            </Label>
            <InputField
              id={`inputFrom${title}`}
              type="text"
              placeholder={'From...'}
              value={inputFieldFrom}
              onChange={handleChangeFrom}
            />
          </div>
          <Line/>
          <div>
            <Label htmlFor={`inputTo${title}`}>
              To
            </Label>
            <InputField
              id={`inputTo${title}`}
              type="text" placeholder={'To...'}
              value={inputFieldTo}
              onChange={handleChangeTo}
            />
          </div>
        </Inner>
        <ButtonApply onClick={handleApply}>Apply</ButtonApply>
      </Box>
    </Container>
  );
};
