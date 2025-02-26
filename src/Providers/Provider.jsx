/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProviderContext from "../../context/ProviderContext";
import { fetchUserProfile } from "../../helpers/backend";

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null) 

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token) setToken(token)
    const fetchUser = async () => {
      setIsLoading(true)
      try {
        const user = await fetchUserProfile();
        setUser(user.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser()
    setIsLoading(false)
  }, []);

  const providerInfo = {
    token,
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
