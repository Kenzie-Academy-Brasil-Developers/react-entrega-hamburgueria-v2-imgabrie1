import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iProducts } from "../UserContext/interfaces";
import { iCartContext, iCartProducts, iContextCartProps } from "./interfaces";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iContextCartProps) => {
  const [currentSale, setCurrentSale] = useState<iCartProducts[]>([]);
  const [modalCart, setModalCart] = useState(false);

  const handleModalCart = () => {
    setModalCart(!modalCart);
  };

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentSale.reduce((x, y) => x + y.quantity * y.price, 0));

  const totalItems = currentSale.reduce((x, y) => x + y.quantity, 0);

  const addItem = (id: number) => {
    const index = currentSale.findIndex((e) => e.id === id);

    let newCurrentSale = [...currentSale];

    newCurrentSale[index].quantity += 1;

    setCurrentSale(newCurrentSale);
  };

  const removeItem = (id: number) => {
    const index = currentSale.findIndex((e) => e.id === id);

    let newCurrentSale = [...currentSale];

    if (newCurrentSale[index].quantity > 1) {
      newCurrentSale[index].quantity -= 1;

      setCurrentSale(newCurrentSale);
    } else {
      removeFromCart(id);
    }
  };

  const addToCart = (product: iProducts) => {
    const testProduct = currentSale.find((e) => e.id === product.id);

    if (!testProduct) {
      setCurrentSale(currentSale.concat([{ ...product, quantity: 1 }]));

      toast.success("Item adicionado ao carrinho");
    } else {
      addItem(product.id);
    }
  };

  const removeFromCart = (id: number) => {
    const newCurrentSale = currentSale.filter((e) => e.id !== id);

    setCurrentSale(newCurrentSale);

    toast.warn("Item removido do carrinho");
  };

  const clearCard = () => {
    setCurrentSale([]);
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCard,
        removeItem,
        addItem,
        modalCart,
        handleModalCart,
        setModalCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
