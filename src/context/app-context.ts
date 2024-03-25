import { createContext } from "react";

export interface AppContextType {
  error: string;
  setError: (value: AppContextType["error"]) => void;
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  error: "",
  setError: () => {},
  isSnackbarOpen: false,
  setIsSnackbarOpen: () => {},
});
