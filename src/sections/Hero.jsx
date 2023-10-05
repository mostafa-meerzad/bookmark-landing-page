import { hero } from "../assets/images";
import {} from "../assets/icons";

const Hero = () => {
  return (
    <section className=" flex max-md:flex-col justify-center items-center">
      <div
        className=" max-md:text-center text-start 
      max-md:order-1 "
      >
        <h1 className="font-medium max-md:text-4xl text-5xl">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayish-blue py-8 max-md:max-w-lg ">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex max-md:justify-around gap-4">
          <button className="py-3 px-5 rounded-lg shadow-lg bg-soft-blue text-white">
            Get it on Chrome
          </button>
          <button className="py-3 px-5 rounded-lg shadow-lg bg-gray-50">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="relative my-16 md:w-[100%] md:scale-125 left-16">
        <img src={hero} alt="hero" className="" />
        <div className="absolute top-[20%] left-[15%] md:left-[30%] bg-soft-blue h-[85%] w-full rounded-l-full -z-10"></div>
      </div>
    </section>
  );
};
export default Hero;
