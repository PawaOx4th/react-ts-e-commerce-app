import { createContext } from "react"

type AuthenticationContext = {
  token: string | undefined
}

export const Authentication = createContext<AuthenticationContext>({
  token: undefined,
})
