import { AuthContext } from "./context/AuthContext"
import { SignIn } from "./pages/SignIn"
import GlobalStyle from "./styles/global"

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: "Artur" }}>
        <SignIn />
        {/* <SingUp /> */}
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  )
}

export default App
