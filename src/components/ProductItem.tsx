import { FC, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

interface ProductItemProps {
  id: string;
  name: string;
  image: string[];
  price: number;
}

const ProductItem: FC<ProductItemProps> = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="cursor-pointer text-gray-700">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-lg font-medium text-green-500">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
