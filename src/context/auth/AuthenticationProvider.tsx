import React, { PropsWithChildren, useEffect } from "react"
import { Authentication } from "./authenticateContext"
import { useLocalStorage } from "react-use"
import { Navigate, useNavigate } from "react-router-dom"

type AuthenticationProviderPropsType = {}

function AuthenticationProvider({ children }: PropsWithChildren<AuthenticationProviderPropsType>) {
  const [token] = useLocalStorage<string | undefined>("token")
  return (
    <Authentication.Provider
      value={{
        token: token,
      }}
    >
      {children}
    </Authentication.Provider>
  )
}

export default AuthenticationProvider
