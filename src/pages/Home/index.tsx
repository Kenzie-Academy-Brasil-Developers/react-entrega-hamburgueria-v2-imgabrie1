import { useContext } from "react";
import { Container } from "../../styles/Container";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { StyledHome } from "./StyledHome";
import { CartContext } from "../../contexts/CartContext";

export const Home = () => {
  const { modalCart } = useContext(CartContext);

  return (
    <StyledHome>
      <Header />

      <Container>
        <ProductsList />

        {modalCart && <Cart />}
      </Container>
    </StyledHome>
  );
};
