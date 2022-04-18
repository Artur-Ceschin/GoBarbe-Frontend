import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./hooks"
import { MainRoutes } from "./routes"
import GlobalStyle from "./styles/global"

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </AppProvider>
      <GlobalStyle />
    </>
  )
}

export default App
