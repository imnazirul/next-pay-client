import { createContext, useContext } from "react";

const ProviderContext = createContext(null);
export const useProvider = () => useContext(ProviderContext);

export default ProviderContext;
