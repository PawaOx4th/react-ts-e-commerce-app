import { GlobalLoading } from "components/molecules/GlobalLoading";
import React, { PropsWithChildren, useMemo, useState } from "react";
import {
  GlobalLoadingContext,
  GlobalLoadingContextType,
} from "./globalLoadingContext";

type GlobalLoadingProviderPropsType = {};

export default function GlobalLoadingProvider({
  children,
}: PropsWithChildren<GlobalLoadingProviderPropsType>) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<GlobalLoadingContextType>(
    () => ({
      isOpen,
      onUpdateIsOpen: () => setIsOpen((prevIsOpen) => !prevIsOpen),
    }),
    [isOpen],
  );

  return (
    <GlobalLoadingContext.Provider value={value}>
      <GlobalLoading isOpen={value.isOpen} />
      {children}
    </GlobalLoadingContext.Provider>
  );
}
