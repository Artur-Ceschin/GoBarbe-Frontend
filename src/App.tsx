import { AppProvider } from "./hooks"
import { SignIn } from "./pages/SignIn"
import GlobalStyle from "./styles/global"

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
        {/* <SingUp /> */}
      </AppProvider>
      <GlobalStyle />
    </>
  )
}

export default App
