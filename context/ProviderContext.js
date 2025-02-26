import { createContext, useContext } from "react";

const ProviderContext = createContext({});
export const useProvider = () => useContext(ProviderContext);

export default ProviderContext;
