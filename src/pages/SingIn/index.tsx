import { FiLogIn } from 'react-icons/fi';

import { Container, Content, BackGround } from './styles';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SingIn() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button name="submit" title="Entrar" />

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <BackGround />
    </Container>
  );
}
