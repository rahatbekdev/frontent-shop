import { FC, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets, ProductsProps } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  // console.log(productId);
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState<ProductsProps | null>(null);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* //!-------------------------PRODUCT DATA -------------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* //!----------------------PRODUCT IMAGES---------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt=""
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[70%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/*//! -----------------------PRODUCT INFORMATION----------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CARD
            </button>
          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash and delivery is avialable on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/*//! --------------------DESCRIPTION & REVIEW SECTION-------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, a,
            iure mollitia nostrum quae impedit, doloribus vero velit harum
            maxime consequuntur sint. Quia est et accusantium mollitia nobis
            dolore placeat eos saepe laboriosam commodi nostrum error, eaque
            rerum eum ut! Quibusdam, architecto assumenda! Nam ab enim molestias
            laborum, dolorum pariatur.
          </p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            perferendis doloribus odit excepturi sed labore itaque repellat,
            dicta exercitationem libero distinctio voluptatum, tenetur atque.
            Nihil debitis eos veritatis modi, consequuntur dolorum hic vel,
            voluptates sequi magnam nesciunt facere, amet est impedit. Similique
            quod quasi officia natus ducimus aliquam, rem quo amet quidem ipsam
            at dignissimos doloribus harum iusto laudantium vel?
          </p>
        </div>
      </div>

      {/*//! -----------------------DISPLAY RELATED PRODUCTS----------------------- */}

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
