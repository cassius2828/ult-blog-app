import type { ReactNode } from "react";
import { createContext, useState } from "react";
interface AppContextProviderTypes {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const AppContext = createContext<AppContextProviderTypes | null>(null);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <AppContext.Provider
      value={{
        isOpen,

        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
