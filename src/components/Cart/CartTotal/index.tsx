import { StyledCartTotal } from "./StyledCartTotal";
import { StyledButton } from "../../../styles/StyledButton";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

export const CartTotal = () => {
  const { totalPrice, clearCard } = useContext(CartContext);

  return (
    <StyledCartTotal>
      <div>
        <HeadingFour>Total</HeadingFour>

        <Text color="gray50" fontWeight="600" fontSize="size5">
          {totalPrice}
        </Text>
      </div>

      <StyledButton
        handleClick={clearCard}
        hover={true}
        width="100%"
        color="gray50"
        bg="gray20"
      >
        Remover todos
      </StyledButton>
    </StyledCartTotal>
  );
};
