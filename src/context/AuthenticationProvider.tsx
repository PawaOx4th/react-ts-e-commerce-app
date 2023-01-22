import React, { PropsWithChildren, useEffect } from "react"
import { Authentication } from "./authenticateContext"
import { useLocalStorage } from "react-use"
import { Navigate, useNavigate } from "react-router-dom"

type Props = {}

function AuthenticationProvider({ children }: PropsWithChildren<Props>) {
  return (
    <Authentication.Provider
      value={{
        token: undefined,
      }}
    >
      {children}
    </Authentication.Provider>
  )
}

export default AuthenticationProvider
