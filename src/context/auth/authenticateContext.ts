import { createContext } from "react"

export type AuthenticationContext = {
  token: string | undefined
}

export const Authentication = createContext<AuthenticationContext>({
  token: undefined,
})
