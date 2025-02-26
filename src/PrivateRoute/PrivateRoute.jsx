/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import { useProvider } from "../../context/ProviderContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useProvider();
  if (isLoading) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <p className="border-white h-20 w-20 inline-block animate-spin rounded-full border-[3px]  border-t-blue-400" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/sign_in"></Navigate>;
};

export default PrivateRoute;