import item from "../componens/aru";


export interface CartContextType {
    cart: item[];
    setCart: React.Dispatch<React.SetStateAction<item[]>>;
  }
