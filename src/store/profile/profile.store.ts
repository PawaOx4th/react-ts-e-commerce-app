import { onGetProfileWithUserId } from "api/profile"
import { definedStore } from "src/helpers"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import useAuthenticationStore from "../authentication/authentication.store"
import { ProfileType } from "./type"

type UseProfileStoreType = {
  user: ProfileType | null
  onUpdateUser: (user: ProfileType) => ProfileType
  onRemoveUser: () => void
  onGetProfile: () => Promise<void>
}

const useProfileStore = create<UseProfileStoreType>()(
  devtools(
    (set) => ({
      user: null,
      onUpdateUser: (user) => {
        set({ user }, false, "onUpdateUser")
        return user
      },
      onRemoveUser: () => {
        set({ user: null }, false, "onRemoveUser")
        useAuthenticationStore.getState().onRemoveJwt()
      },
      onGetProfile: async () => {
        const [data, error] = await onGetProfileWithUserId("45")
        if (error) {
          // handle error
        }
        if (data) {
          set({ user: data }, false, "onGetProfile")
        }
      },
    }),
    definedStore("useProfileStore"),
  ),
)

export default useProfileStore
