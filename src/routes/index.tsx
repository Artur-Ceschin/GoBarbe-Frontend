import { Route, Routes } from "react-router-dom"
import { SignIn } from "../pages/SignIn"
import { SingUp } from "../pages/SignUp"

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  )
}
