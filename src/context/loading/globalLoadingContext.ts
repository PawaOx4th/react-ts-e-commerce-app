import { createContext } from "react";

export type GlobalLoadingContextType = {
  isOpen: boolean;
  onUpdateIsOpen: () => void;
};

export const GlobalLoadingContext = createContext<GlobalLoadingContextType>({
  isOpen: false,
  onUpdateIsOpen: () => {},
});
