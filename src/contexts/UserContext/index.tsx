import { AxiosError } from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api/api";
import { iContextUserProps, iDataLogin, iDataRegister, iProducts, iResponse, iUserContext } from "./interfaces";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iContextUserProps) => {
  const [products, setProducts] = useState<iProducts[] | null>(null);
  const [filteredWord, setFilteredWord] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<iProducts[] | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await api.get<iProducts[]>("/products", {
        headers: { authorization: `Bearer ${token}` },
      });

      setProducts(data);
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);

      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const registerUser = async (data: iDataRegister): Promise<void> => {
    setLoadingForm(true);
    try {
      await api.post("/users", data);

      toast.success("Cadastro efetuado com sucesso");

      navigate("/");
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const login = async (data: iDataLogin): Promise<void> => {
    setLoadingForm(true);
    try {
      const { data: responseData } = await api.post<iResponse>("/login", data);

      localStorage.setItem("@TOKEN", responseData.accessToken);

      await getProducts();

      navigate("/home");

      toast.success("Logado, bora comer");
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const resetToAllProducts = () => {
    setFilteredWord(null);

    setFilteredProducts(null);
  };

  const logout = () => {
    localStorage.clear();

    setProducts(null);

    setFilteredProducts(null);

    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        products,
        filteredWord,
        filteredProducts,
        resetToAllProducts,
        setFilteredWord,
        setFilteredProducts,
        loading,
        registerUser,
        login,
        logout,
        loadingForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
