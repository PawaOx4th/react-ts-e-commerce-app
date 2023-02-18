import { PropsWithChildren } from "react"
import { useLocalStorage } from "react-use"
import { Authentication } from "./authenticateContext"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { JwtType } from "api/authentication/authentication.type"

type AuthenticationProviderPropsType = {}

function AuthenticationProvider({ children }: PropsWithChildren<AuthenticationProviderPropsType>) {
  const [token, setToken, removeToken] = useLocalStorage<string | undefined>("token")

  const onSetToken = (param: string) => {
    const jwtData = jwtDecode<JwtType>(param)

    setToken(param)
    Cookies.set("token", param)
  }

  const onDeleteToken = () => {
    removeToken()
  }

  return (
    <Authentication.Provider
      value={{
        token: token,
        onSetToken: onSetToken,
        onDeleteToken: onDeleteToken,
      }}
    >
      {children}
    </Authentication.Provider>
  )
}

export default AuthenticationProvider
