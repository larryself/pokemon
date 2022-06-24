import { Container, InputField, Inner } from './style'
import { InputRange, InputCheckbox } from "components";

export const Filter = () => {
  return (
    <Container>
      <InputField type="text" placeholder={'Encuentra tu pokémon...'}/>
      <Inner>
        <InputCheckbox title={'Tipo'}/>
        <InputRange title={'Attack'}/>
        <InputRange title={'Experiencia'}/>
      </Inner>
    </Container>
  );
};
