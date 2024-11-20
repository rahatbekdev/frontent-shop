import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { products, ProductsProps } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ShopContextType {
  products: ProductsProps[];
  currency: string;
  delivery_free: number;
  search: string;
  showSearch: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  cartItems: Record<string, Record<string, number>>;
  addToCart: (itemId: string, size: string) => void;
  getCartCount: () => number;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  getCartAmount: () => number;
  navigate: (path: string) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: FC<ShopContextProviderProps> = ({ children }) => {
  const currency = "$";
  const delivery_free = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<
    Record<string, Record<string, number>>
  >({});
  const navigate = useNavigate();

  const addToCart = async (itemId: string, size: string) => {
    if (!size) {
      toast.error("Selext Product Size");
      return;
    } else {
      toast.success("Product succesfylli");
    }
    const updatedCartItems = structuredClone(cartItems);

    if (updatedCartItems[itemId]) {
      if (updatedCartItems[itemId][size]) {
        updatedCartItems[itemId][size] += 1;
      } else {
        updatedCartItems[itemId][size] = 1;
      }
    } else {
      updatedCartItems[itemId] = { [size]: 1 };
    }

    setCartItems(updatedCartItems);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (
    itemId: string,
    size: string,
    quantity: number
  ) => {
    const cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmound = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmound += (itemInfo?.price ?? 0) * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmound;
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_free,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
