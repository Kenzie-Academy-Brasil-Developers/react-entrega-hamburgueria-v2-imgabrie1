import { Logo } from "../Header/Logo";
import { ToastMainPage } from "./ToastMainPage";
import imgDots from "../../assets/img/GroupDots.svg";
import { StyledAside } from "./StyledAside";

export const AsideEnterPage = () => {
  return (
    <StyledAside>
      <Logo />

      <ToastMainPage />

      <figure>
        <img src={imgDots} alt="Dots" />
      </figure>
    </StyledAside>
  );
};
