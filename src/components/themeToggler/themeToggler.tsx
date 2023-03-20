import { Sun, Moon } from 'components';
import React, { FC } from 'react';
import { useAction } from 'store/useActions';
import { useThemeSelector } from 'store/useThemeSelector';
import { Container, Input, Label, Ball } from './style'

interface Props {
  isOpen: boolean;
}

export const ThemeToggler: FC<Props> = ({isOpen}) => {
  const {theme} = useThemeSelector()
  const {setTheme} = useAction()
  return (
    <Container isOpen={isOpen}>
      <Input type="checkbox" id="checkbox"/>
      <Label htmlFor='checkbox' onClick={() => setTheme()}>
        <Ball>
          {theme === 'LightTheme' ? <Sun/> : <Moon/>}
        </Ball>
      </Label>
    </Container>
  );
};
