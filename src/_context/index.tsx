import { createContext, useContext, useState } from "react";
type GlobalContextType = {
  isModelOpen: boolean;
  setIsModelOpen: (isOpen: boolean) => void;
};
type ProviderProps = {
  children: React.ReactNode;
};
const GlobalContextProvider = ({ children }: ProviderProps) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isModelOpen, setIsModelOpen }}>
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
