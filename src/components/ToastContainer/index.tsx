import { useTransition } from "react-spring"
import { ToastMessage } from "../../hooks/toast"
import { Container } from "./styles"
import { Toast } from "./Toast"

interface ToastContainerProps {
  messages: ToastMessage[]
}

export function ToastContainer({ messages }: ToastContainerProps) {
  const messagesWithTransitions = useTransition(messages, {
    message: (message: any) => message.id,

    from: { right: "-120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "-120%", opacity: 0 },
  })

  return (
    <Container>
      {messagesWithTransitions((style, item, t, i) => (
        <Toast key={i} style={style} message={item} />
      ))}
    </Container>
  )
}
