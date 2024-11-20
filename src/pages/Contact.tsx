import { FC } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact: FC = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACK"} text2={"US"} />
      </div>

      <div className="flex flex-col justify-center my-10 md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            55444 Willms Station <br /> Suite 350,Washington,USA
          </p>
          <p className="text-gray-500">
            Tel:996 010101 <br />
            Email: js@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Forever Life</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explorer Jobs
          </button>
        </div>
      </div>
      <NewsLetter />
      {/* <img src="https://i.imgur.com/1twoaDy.jpeg" alt="" /> */}
    </div>
  );
};

export default Contact;
