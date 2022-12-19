import { AsideEnterPage } from "../../components/AsideEnterPage";
import { ToastMainPage } from "../../components/AsideEnterPage/ToastMainPage";
import { FormRegister } from "./FormRegister";
import { Logo } from "../../components/Header/Logo";
import { Container } from "../../styles/Container";
import { StyledRegister } from "./StyledRegister";

export const Register = () => {
  return (
    <StyledRegister>
      <Container>
        <AsideEnterPage />

        <div>
          <div>
            <Logo />

            <ToastMainPage />
          </div>

          <FormRegister />
        </div>
      </Container>
    </StyledRegister>
  );
};
