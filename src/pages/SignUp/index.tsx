import { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import { useCallback, useRef } from "react"
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import logoImg from "../../assets/logo.svg"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import getValidationErrors from "../../utils/getValidationsErrors"
import { AnimationContainer, BackGround, Container, Content } from "./styles"

export function SingUp() {
  const formRef = useRef<FormHandles>(null)

  console.log(formRef)

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 digítos"),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }
    }
  }, [])

  return (
    <Container>
      <BackGround />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              placeholder="Senha"
              icon={FiLock}
              type="password"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltrar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
