import { createContext } from "react"

export type AuthenticationContext = {
  token: string | undefined
  onSetToken: (param: string) => void
  onDeleteToken: () => void
}

export const Authentication = createContext<AuthenticationContext>({
  token: undefined,
  onSetToken: () => {},
  onDeleteToken: () => {},
})
