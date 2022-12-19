import { useContext } from "react";
import { StyledLogo } from "./StyledLogo";
import { HeadingOne } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { UserContext } from "../../../contexts/UserContext";

export const Logo = () => {
  const { resetToAllProducts } = useContext(UserContext);

  return (
    <StyledLogo onClick={resetToAllProducts}>
      <HeadingOne>
        Burger{" "}
        <Text fontWeight="700" fontSize="size3" color="secondary">
          Kenzie
        </Text>
      </HeadingOne>
    </StyledLogo>
  );
};
