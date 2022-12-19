import React, { useContext } from "react";
import { StyledHeader, ButtonHeader } from "./StyledHeader";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { Container } from "../../styles/Container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const { logout } = useContext(UserContext);
  const { handleModalCart, totalItems } = useContext(CartContext);

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <div>
          <InputSearch />

          <div>
            <ButtonHeader onClick={handleModalCart}>
              <AiOutlineShoppingCart />
              <span>{totalItems}</span>
            </ButtonHeader>

            <ButtonHeader onClick={logout}>
              <FiLogOut />
            </ButtonHeader>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};
