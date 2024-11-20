import { FC, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { ProductsProps } from "../assets/assets";
import ProductItem from "./ProductItem";

const LatestCollection: FC = () => {
  const context = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  if (!context) {
    throw new Error(
      "LatestCollection must be used within a ShopContextProvider"
    );
  }

  const { products } = context;
  // console.log(products);

  return (
    <div className="my_10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
          ullam beatae. Vel earum dolorem aut maxime quae aliquid corporis
          dolorum repudiandae excepturi accusantium. Ad earum nisi architecto
          voluptatibus perspiciatis laudantium!
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
