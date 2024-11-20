import { FC, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductsProps } from "../assets/assets";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct: FC = ({ category, subCategory }) => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Context no provided");
  }
  const { products } = context;
  // console.log("ddddd",products);
  const [related, setRelated] = useState<ProductsProps[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-sm py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
