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
          <button className="w-44 h-12 rounded-lg shadow-lg bg-soft-blue text-white hover:text-soft-blue hover:bg-white hover:border-2 hover:border-soft-blue active:scale-[98%]">
            Get it on Chrome
          </button>
          <button className="w-44 h-12 rounded-lg shadow-lg bg-gray-50 hover:bg-soft-blue hover:border-2 hover:border-white hover:text-white active:scale-[98%]">
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
