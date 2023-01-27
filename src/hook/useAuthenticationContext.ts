import { Authentication } from "context/auth"
import { useContext } from "react"

function useAuthenticationContext() {
  const context = useContext(Authentication)

  if (!context) {
    throw new Error(
      "useAuthenticationContext was used outside of its Provider (AuthenticationProvider)",
    )
  }

  return context
}

export default useAuthenticationContext
