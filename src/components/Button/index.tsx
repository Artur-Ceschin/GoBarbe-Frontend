import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button<ButtonProps>() {
  return (
    <Container>
      <button type="button">Teste</button>
    </Container>
  );
}
