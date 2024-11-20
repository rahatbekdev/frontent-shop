import { FC, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

interface CartProductProps {
  _id: string;
  size: string;
  quantity: number;
}

const Cart: FC = () => {
  const shopContext = useContext(ShopContext);
  const [cartData, setCartData] = useState<CartProductProps[]>([]);

  useEffect(() => {
    if (!shopContext) return;

    const { cartItems } = shopContext;
    const tempData: CartProductProps[] = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [shopContext?.cartItems]);

  if (!shopContext) {
    return <div>Контекст магазина не найден</div>;
  }

  const { products, currency, updateQuantity, navigate } = shopContext;

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOU"} text2={"CART"} />
      </div>

      {cartData.length === 0 ? (
        <div className="flex items-center justify-start">
          <img
            src="https://avatars.mds.yandex.net/i?id=64a46714043ccdd57f41e2c385536d59_sr-12496425-images-thumbs&n=13"
            alt=""
            className="w-56"
          />
        </div>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            if (!productData) return null;

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border border-slate-500">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
                <img
                  src={assets.bin_icon}
                  alt=""
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
