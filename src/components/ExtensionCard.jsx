import { dots } from "../assets/images";

const ExtensionCard = ({ title, desc, img, link, order }) => (
  <div
    className={`py-8 px-4 flex flex-col items-center shadow-lg top-12 max-md:p-8 h-fit group hover:scale-110 transition-all ease-in-out`}
    style={{ marginTop: `${order * 2}rem` }}
  >
    <img
      src={img}
      alt={title}
      className="my-8 group-hover:scale-110 transition-all ease-in-out"
    />
    <h3 className="text-2xl">{title}</h3>
    <p className="text-grayish-blue mt-2 mb-8">{desc}</p>
    <img src={dots} alt="" />
    <a
      href={link}
      className="mt-4 w-[13rem] h-10 flex justify-center items-center text-white bg-soft-blue rounded-lg active:text-soft-blue active:border-soft-blue active:border-2 active:bg-white active:scale-[.97] transition-all ease-in-out
      hover:border-soft-blue hover:border-2 hover:text-soft-blue hover:bg-white"
    >
      Add & Install Extension
    </a>
  </div>
);
export default ExtensionCard;
