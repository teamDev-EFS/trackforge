import { createContext, useContext, useState, type ReactNode } from 'react';

const AppContext = createContext<any>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<any>({});
  return <AppContext.Provider value={{ ...state, setState }}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext) ?? {};
}

export default AppContext;
