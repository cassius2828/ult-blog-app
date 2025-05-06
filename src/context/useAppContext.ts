import { createContext } from "vm";
import { AppContext } from "./AppProvider";

export const useAppContext = () => {
  const context = createContext(AppContext);
  if (!context) throw new Error("Must use app context in app provider");
  return context;
};
