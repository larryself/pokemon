import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Container, InputField, Button, TitleInner, IconInner, Box, Label, Checkbox } from './style';
import { useAction } from 'store';
import { ArrowDown } from 'components';
import { featuresColors } from 'constants/colors';

interface Props {
  title: string

}
export const InputCheckbox:FC<Props> = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {setFilterType} = useAction();
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const name = e.target.name;
    const value = e.target.value;
    setFilterType({name, value, checked});
  };
  const ref = useRef<HTMLDivElement>(null);
  const handler = (e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }

  };
  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);
  return (
    <Container ref={ref}>
      <div onClick={(event) => event.stopPropagation()}>
        <Button type={'button'} onClick={() => setIsOpen(prev => !prev)}>
          <TitleInner>{title}</TitleInner>
          <IconInner isOpen={isOpen}><ArrowDown/></IconInner>
        </Button>
        <Box isOpen={isOpen}>
          {Object.keys(featuresColors).map((item: string) => (
            <li key={item}>
              <Label>
                <InputField
                  type={'checkbox'}
                  name={'type'}
                  value={item}
                  onChange={handleChecked}
                />
                <Checkbox/>
                {item[0].toUpperCase() + item.slice(1)}
              </Label>
            </li>))}
        </Box>
      </div>
    </Container>
  );
};

