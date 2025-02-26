/* eslint-disable react/prop-types */

import {  useEffect, useState } from "react";
import ProviderContext from "../../context/ProviderContext";


const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(()=>{
   const token = localStorage.getItem("token")

  },[])

  
  const providerInfo = {
    isLoading,
    setIsLoading,
    user,
    setUser,
  };


  return (
    <ProviderContext.Provider value={providerInfo}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
