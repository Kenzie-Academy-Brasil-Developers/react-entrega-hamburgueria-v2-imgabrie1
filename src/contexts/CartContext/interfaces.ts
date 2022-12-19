import { iProducts } from "../UserContext/interfaces";

export interface iContextCartProps {
  children: React.ReactNode;
}

export interface iCartProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}

export interface iCartContext {
  currentSale: iCartProducts[];
  totalPrice: string;
  addToCart: (product: iProducts) => void;
  removeFromCart: (id: number) => void;
  clearCard: () => void;
  removeItem: (id: number) => void;
  addItem: (id: number) => void;
  modalCart: boolean;
  handleModalCart: () => void;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
}
