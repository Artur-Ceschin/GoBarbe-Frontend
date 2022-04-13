import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"
import { api } from "../services/api"

interface AuthState {
  token: string
  user: Object
}

interface SingInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: Object
  singIn: (credentials: SingInCredentials) => Promise<void>
  singOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token")
    const user = localStorage.getItem("@GoBarber:user")

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post<{ token: string; user: Object }>(
      "/sessions",
      {
        email,
        password,
      }
    )

    const { token, user } = response.data

    localStorage.setItem("@GoBarber:token", token)
    localStorage.setItem("@GoBarber:user", JSON.stringify(user))

    setData({ token, user })
  }, [])

  const singOut = useCallback(() => {
    localStorage.removeItem("@GoBarber:token")
    localStorage.removeItem("@GoBarber:user")

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
