import React, { createContext, useContext, useState } from "react";
type GlobalContextType = {
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type ProviderProps = {
  children: React.ReactNode;
};
const GlobalContextProvider = ({ children }: ProviderProps) => {
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isWriteModalOpen, setIsWriteModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
export default GlobalContextProvider;
