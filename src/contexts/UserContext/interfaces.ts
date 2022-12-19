export interface iContextUserProps {
  children: React.ReactNode;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iResponse {
  accessToken: string;
  user: iUserResponse;
}

export interface iUserResponse {
  email: string;
  name: string;
  id: number;
}

export interface iUserContext {
  products: iProducts[] | null;
  filteredWord: string | null;
  filteredProducts: iProducts[] | null;
  resetToAllProducts: () => void;
  setFilteredWord: React.Dispatch<React.SetStateAction<string | null>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProducts[] | null>>;
  loading: boolean;
  registerUser: (data: iDataRegister) => Promise<void>;
  login: (data: iDataLogin) => Promise<void>;
  logout: () => void;
  loadingForm: boolean;
}
