import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { UserContext } from "../../../contexts/UserContext";
import { StyledForm } from "../../../styles/StyledForm";
import { StyledModelLogin } from "./StyledLoginForm";
import { StyledInput } from "../../../styles/StyledInput";
import { StyledButton } from "../../../styles/StyledButton";
import { HeadingThree, Text } from "../../../styles/Typography";
import { StyledLink } from "../../../styles/StyledLink";
import { iDataLogin } from "../../../contexts/UserContext/interfaces";
import { Spinner } from "../../../components/Spinner";

export const FormLogin = () => {
  const { login, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onsubmit: SubmitHandler<iDataLogin> = async (data) => {
    await login(data);
  };

  return (
    <StyledModelLogin>
      <div>
        <HeadingThree>Login</HeadingThree>
      </div>

      <StyledForm onSubmit={handleSubmit(onsubmit)}>
        <fieldset>
          <StyledInput
            placeholder="Email"
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

        <StyledButton width="100%" type="submit" disabled={loadingForm}>
          {loadingForm ? <Spinner small={true} /> : "Logar"}
        </StyledButton>

        <Text fontSize="size5" color="gray50" textCenter>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>

        <StyledLink color="gray50" bg="gray0" width="100%" to="/register">
          Cadastrar
        </StyledLink>
      </StyledForm>
    </StyledModelLogin>
  );
};
