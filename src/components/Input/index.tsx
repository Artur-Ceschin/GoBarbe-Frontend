import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
export function Input<InputProps>() {
  return (
    <Container>
      <input type="text">Teste</input>
    </Container>
  );
}
