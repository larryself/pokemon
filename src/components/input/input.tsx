import { Container, InputField } from './style';
import { ChangeEvent, FC, useState } from 'react';
import { useAction } from '../../store';

interface Props {
  placeholder: string;
  value?: string
}

export const Input: FC<Props> = ({placeholder, value}) => {
  const {setName} = useAction();
  const [inputValue, setInputValue] = useState<string>(value || '');
  const handleInput = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    setName(value);
  };
  return (
    <Container>
      <InputField type="text" placeholder={placeholder} value={inputValue} onChange={handleInput}/>
    </Container>
  );
};
