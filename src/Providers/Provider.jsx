/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ProviderContext from "../../context/ProviderContext";
import { fetchUserProfile } from "../../helpers/backend";

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async () => {
      try {
        const user = await fetchUserProfile();
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (token) {
      fetchUser;
      setIsLoggedIn(true);
    }
  }, []);

  const providerInfo = {
    isLoggedIn,
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
