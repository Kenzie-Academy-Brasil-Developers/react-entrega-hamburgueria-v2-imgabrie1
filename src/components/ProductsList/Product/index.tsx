import { useContext } from "react";
import { StyledProduct } from "./StyledProduct";
import { StyledButton } from "../../../styles/StyledButton";
import { HeadingThree } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { CartContext } from "../../../contexts/CartContext";
import { iProducts } from "../../../contexts/UserContext/interfaces";

interface iProduct {
  product: iProducts;
}

export const Product = ({ product }: iProduct) => {
  const { addToCart } = useContext(CartContext);
  return (
    <StyledProduct>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div>
        <HeadingThree>{product.name}</HeadingThree>

        <Text fontSize="size6" color="gray50">
          {product.category}
        </Text>

        <Text fontWeight="600" fontSize="size5" color="primary">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </Text>

        <StyledButton height="medium" handleClick={() => addToCart(product)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProduct>
  );
};
