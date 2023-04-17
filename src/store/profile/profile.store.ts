import { onGetUserProfile } from "api/profile";
import { definedStore } from "src/helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import useAuthenticationStore from "../authentication/authentication.store";
import { ProfileType } from "./type";

type UseProfileStoreType = {
  user: ProfileType | null;
  onUpdateUser: (user: ProfileType) => ProfileType;
  onRemoveUser: () => void;
  onGetProfile: () => Promise<[ProfileType | null, null | string]>;
};

const useProfileStore = create<UseProfileStoreType>()(
  devtools(
    (set) => ({
      user: null,
      onUpdateUser: (user) => {
        set({ user }, false, "onUpdateUser");
        return user;
      },
      onRemoveUser: () => {
        set({ user: null }, false, "onRemoveUser");
        useAuthenticationStore.getState().onRemoveJwt();
      },
      onGetProfile: async () => {
        const [data, error] = await onGetUserProfile();
        if (data) {
          set({ user: data }, false, "onGetProfile");
        }

        return [data, error];
      },
    }),
    definedStore("useProfileStore"),
  ),
);

export default useProfileStore;
