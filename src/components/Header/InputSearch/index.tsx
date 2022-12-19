import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormSearch } from "./StyledInputSearch";
import { StyledButton } from "../../../styles/StyledButton";
import { StyledInput } from "../../../styles/StyledInput";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { schema } from "./schema";
import { Navigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

interface iFormValues {
  search: string;
}

export const InputSearch = () => {
  const { products, setFilteredWord, setFilteredProducts } =
    useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<iFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { search: "" },
  });

  if (!products) {
    return <Navigate to="/" />;
  }

  const handleSearch: SubmitHandler<iFormValues> = (data) => {
    setFilteredWord(data.search);
    const newFilter = products.filter(
      (e) =>
        e.name.toLowerCase().includes(data.search.toLowerCase()) ||
        e.category.toLowerCase().includes(data.search.toLowerCase())
    );
    setFilteredProducts(newFilter);
    reset({ search: "" });
  };

  return (
    <StyledFormSearch onSubmit={handleSubmit(handleSearch)}>
      <StyledInput
        name="inputSearch"
        placeholder="Digitar pesquisa"
        register={register("search")}
      />

      <StyledButton height="medium" position type="submit">
        <BsSearch />
      </StyledButton>
    </StyledFormSearch>
  );
};
