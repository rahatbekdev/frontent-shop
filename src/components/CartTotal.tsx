import { FC, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal: FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "LatestCollection must be used within a ShopContextProvider"
    );
  }

  const { currency, delivery_free, getCartAmount } = context;


  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Free</p>
          <p>
            {currency} {delivery_free}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_free}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
