import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner";
import { LoadingPage } from "../../styles/PageDefault";

export const ProtectedRoutes = () => {
  const { products, loading } = useContext(UserContext);

  if (loading) {
    return (
      <LoadingPage>
        <Spinner big={true} />
      </LoadingPage>
    );
  }

  return products ? <Outlet /> : <Navigate to="/" />;
};
