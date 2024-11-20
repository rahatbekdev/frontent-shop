import { FC } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About: FC = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-ful md:max-w-[450px]" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            facere quos ratione aut asperiores sapiente? Nisi eos alias
            accusamus nihil similique ea aut dolore quisquam hic, ipsam quo,
            dolores unde deleniti molestiae sunt dolorum impedit facere
            accusantium! Odit rem officia, vero cum reprehenderit facilis
            expedita! Sint autem assumenda nam nostrum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            repellat nam atque quidem rem quae, sint saepe aperiam velit dolore
            molestias tempore dolores sapiente eaque eum excepturi. Molestias
            repellendus blanditiis eaque maiores a laudantium asperiores dolorem
            vel natus ullam error similique ex iste sint corrupti, et soluta
            fugiat iusto. Minima?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptate doloribus dolore totam eos. Facere voluptatum voluptates
            aspernatur voluptate nisi, reiciendis placeat, porro veniam at id
            corporis earum nemo? A.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            eum. Similique, fugiat. Commodi, debitis error!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            eum. Similique, fugiat. Commodi, debitis error!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            eum. Similique, fugiat. Commodi, debitis error!
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
