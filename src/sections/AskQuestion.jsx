import QuestionCard from "../components/QuestionCard";
import { questions } from "../constants";

const AskQuestion = () => {
  return (
    <div className="flex flex-col items-center my-24">
      <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      <p className="text-center text-grayish-blue max-w-lg my-8">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      {questions.map((arg) => (
        <QuestionCard key={arg.question} {...arg} />
      ))}

      <a href="#" className="mt-12 w-24 h-9 flex justify-center items-center rounded-lg text-white bg-soft-blue hover:text-soft-blue hover:bg-white hover:border-2 hover:border-soft-blue active:scale-[98%] transition-all ease-in-out">More Info</a>
    </div>
  );
};
export default AskQuestion;
