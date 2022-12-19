import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

interface iContextProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: iContextProviders) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
