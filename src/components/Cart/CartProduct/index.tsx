import { useContext } from "react";
import { StyledModelButtons, StyledCartProduct } from "./StyledCartProduct";
import { StyledButton } from "../../../styles/StyledButton";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { CartContext } from "../../../contexts/CartContext";
import { iCartProducts } from "../../../contexts/CartContext/interfaces";

interface iCartProduct {
  product: iCartProducts;
}

export const CartProduct = ({ product }: iCartProduct) => {
  const { removeFromCart, removeItem, addItem } = useContext(CartContext);

  return (
    <StyledCartProduct>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div>
        <div>
          <HeadingFour>{product.name}</HeadingFour>
          <Text color="gray50" fontSize="size6">
            {product.category}
          </Text>
        </div>

        <StyledModelButtons>
          <StyledButton
            color="gray50"
            handleClick={() => removeFromCart(product.id)}
          >
            Remover
          </StyledButton>

          <div>
            <StyledButton
              handleClick={() => removeItem(product.id)}
              color="gray50"
            >
              -
            </StyledButton>

            <Text color="gray100" fontSize="size6">
              {product.quantity}
            </Text>

            <StyledButton
              handleClick={() => addItem(product.id)}
              color="gray50"
            >
              +
            </StyledButton>
          </div>
        </StyledModelButtons>
      </div>
    </StyledCartProduct>
  );
};
