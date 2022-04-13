import { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import { useCallback, useRef } from "react"
import { FiLock, FiLogIn, FiMail } from "react-icons/fi"
import * as Yup from "yup"
import logoImg from "../../assets/logo.svg"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useAuth } from "../../hooks/auth"
import { useToast } from "../../hooks/toast"
import getValidationErrors from "../../utils/getValidationsErrors"
import { BackGround, Container, Content } from "./styles"

interface SingInFormData {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)

  const { user, singIn } = useAuth()

  const { addToast } = useToast()

  console.log("user", user)
  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        })

        await schema.validate(data, {
          abortEarly: false,
        })
        await singIn({
          email: data.email,
          password: data.password,
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }
        addToast({
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login, cheque as credenciais",
          id: "",
        })
      }
    },
    [singIn, addToast]
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <BackGround />
    </Container>
  )
}
