import { useContext } from "react";
import { Product } from "./Product";
import { StyledProductsList } from "./StyledProductsList";
import { HeadingTwo } from "../../styles/Typography";
import { Text } from "../../styles/Typography";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

export const ProductsList = () => {
  const { filteredWord, products, filteredProducts } = useContext(UserContext);

  if (!products) {
    return <Navigate to="/" />;
  }

  return (
    <StyledProductsList>
      {filteredWord && (
        <HeadingTwo>
          Resultados para:{" "}
          <Text
            fontWeight="700"
            fontSize="size2"
            color="gray50"
            textCenter={false}
          >
            {filteredWord}
          </Text>
        </HeadingTwo>
      )}
      <ul>
        {filteredProducts
          ? filteredProducts
              .filter((produc) => produc.name)
              .map((produc) => <Product key={produc.id} product={produc} />)
          : products
              .filter((e) => e.name)
              .map((e) => <Product key={e.id} product={e} />)}
      </ul>
    </StyledProductsList>
  );
};
