import { FC } from "react";
import { assets } from "../assets/assets";

const Footer: FC = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            libero veniam hic enim amet quas at accusantium quod! Dolorem
            molestiae incidunt sint reiciendis vero quam corporis id,
            perspiciatis nam error doloribus officiis? Dolores dicta nihil
            totam, provident molestias saepe pariatur illum temporibus aperiam
            non vitae repellendus necessitatibus fugit, rem iusto.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+996 707 11-11-11</li>
            <li>js13@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          _Copyright<sup>&copy;</sup> _2024_ Bishkek_
        </p>
      </div>
    </div>
  );
};

export default Footer;
