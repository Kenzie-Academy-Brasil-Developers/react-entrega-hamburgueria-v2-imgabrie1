import { AsideEnterPage } from "../../components/AsideEnterPage";
import { ToastMainPage } from "../../components/AsideEnterPage/ToastMainPage";
import { FormLogin } from "./FormLogin";
import { Logo } from "../../components/Header/Logo";
import { Container } from "../../styles/Container";
import { StyledLoginPage } from "./StyledLogin";

export const Login = () => {
  return (
    <StyledLoginPage>
      <Container>
        <div>
          <div>
            <Logo />

            <ToastMainPage />
          </div>

          <FormLogin />
        </div>

        <AsideEnterPage />
      </Container>
    </StyledLoginPage>
  );
};
