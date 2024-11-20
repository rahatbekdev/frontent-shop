import { FC } from "react";

interface TitleProps {
  text1: string;
  text2: string;
}

const Title: FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;




//! Tittle Animation and CSS -> index.css
// import { FC } from "react";

// interface TitleProps {
//   text1: string;
//   text2: string;
// }

// const Title: FC<TitleProps> = ({ text1, text2 }) => {
//   return (
//     <div className="inline-flex gap-2 items-center mb-3">
//       <p className="flex gap-[2px]">
//         {text1.split("").map((letter, index) => (
//           <span
//             key={index}
//             className="text-gray-500 animate-color-change"
//             style={{
//               animationDelay: `${index * 0.1}s`, // задержка для эффекта последовательности
//             }}
//           >
//             {letter}
//           </span>
//         ))}
//       </p>
//       <p className="text-gray-700 font-medium">{text2}</p>
//       <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></div>
//     </div>
//   );
// };

// export default Title;
