import { features } from "../constants";

const FeatureShowcase = ({ activeFeature }) =>
  features.map(({ name, title, desc, link, img }) => {
    if (activeFeature === name) {
      return (
        <div
          key={name}
          className="flex justify-between my-12 gap-12 max-md:flex-col max-md:items-center "
        >
          <div className="relative h-5/6 ">
            <img
              src={img}
              alt={name}
              loading="lazy"
              className="  max-h-72 max-md:max-h-[80%] mb-32"
            />
            <div className="absolute -z-10 h-[60%] w-[150%] bg-soft-blue rounded-r-full top-[25%] right-[20%]"></div>
          </div>
          <div className=" md:w-[45%]  flex flex-col justify-center max-md:items-center">
            <h3 className="text-3xl font-medium">{title}</h3>
            <p className="py-6 text-grayish-blue max-md:text-center max-w-lg">{desc}</p>
            <a
              href={link}
              className="w-24 h-12 bg-soft-blue text-white
               rounded-md flex justify-center items-center hover:text-soft-blue hover:bg-white hover:border-2 hover:border-soft-blue active:scale-[98%] transition-all ease-in-out max-md:hidden "
            >
              more info
            </a>
          </div>
        </div>
      );
    }
  });
export default FeatureShowcase;
