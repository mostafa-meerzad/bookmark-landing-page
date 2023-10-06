import { useState } from "react";
import Arrow from "../components/Arrow";

const QuestionCard = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="max-w-lg py-6  border-b-2  " onClick={handleClick}>
      <div className="flex justify-between items-center cursor-pointer hover:text-gray-400 transition-all ease-in-out ">
        <p>{question}</p>
        <Arrow
          className={`first-letter:object-contain  transition-all ease-in-out duration-300  ${
            isExpanded
              ? "-rotate-180 stroke-soft-red"
              : "rotate-0 stroke-soft-blue"
          }`}
        />
      </div>
      <p
        className={`text-grayish-blue overflow-hidden ${
          isExpanded ? " mt-4" : " mt-0 h-0"
        }  transition-all ease-in-out duration-300`}
      >
        {answer}
      </p>
    </div>
  );
};
export default QuestionCard;
