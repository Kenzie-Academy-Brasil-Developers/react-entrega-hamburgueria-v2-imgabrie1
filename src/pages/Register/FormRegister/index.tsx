import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { UserContext } from "../../../contexts/UserContext";
import { HeadingThree, Text } from "../../../styles/Typography";
import { StyledLink } from "../../../styles/StyledLink";
import { StyledModelRegister } from "./StyledRegisterForm";
import { StyledForm } from "../../../styles/StyledForm";
import { StyledInput } from "../../../styles/StyledInput";
import { StyledButton } from "../../../styles/StyledButton";
import { iDataRegister } from "../../../contexts/UserContext/interfaces";
import { Spinner } from "../../../components/Spinner";

export const FormRegister = () => {
  const { registerUser, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iDataRegister> = async (data) => {
    await registerUser(data);
  };

  return (
    <StyledModelRegister>
      <div>
        <HeadingThree>Cadastro</HeadingThree>

        <StyledLink to="/" registerlink="true">
          Retornar para o login
        </StyledLink>
      </div>

      <StyledForm onSubmit={handleSubmit(submit)}>
        <fieldset>
          <StyledInput
            placeholder="Nome"
            type="text"
            id="name"
            register={register("name")}
          />

          <label htmlFor="name">Nome</label>

          {errors.name && (
            <Text fontSize="size6" color="secondary">
              {errors.name.message}
            </Text>
          )}
        </fieldset>

        <fieldset>
          <StyledInput
            placeholder="E-mail"
            type="email"
            id="email"
            register={register("email")}
          />

          <label htmlFor="email">Email</label>

          {errors.email && (
            <Text fontSize="size6" color="secondary">
              {errors.email.message}
            </Text>
          )}
        </fieldset>

        <fieldset>
          <StyledInput
            placeholder="Senha"
            type="password"
            id="password"
            register={register("password")}
          />

          <label htmlFor="password">Digite sua senha</label>

          {errors.password && (
            <Text fontSize="size6" color="secondary">
              {errors.password.message}
            </Text>
          )}
        </fieldset>

        <fieldset>
          <StyledInput
            placeholder="Confirmar Senha"
            type="password"
            id="confirmPassword"
            register={register("confirmPassword")}
          />

          <label htmlFor="confirmPassword">Confirme sua senha</label>

          {errors.confirmPassword && (
            <Text fontSize="size6" color="secondary">
              {errors.confirmPassword.message}
            </Text>
          )}
        </fieldset>

        <StyledButton
          color="gray50"
          bg="gray0"
          hover
          width="100%"
          type="submit"
          disabled={loadingForm}
        >
          {loadingForm ? <Spinner small={true} /> : "Cadastrar"}
        </StyledButton>
      </StyledForm>
    </StyledModelRegister>
  );
};
