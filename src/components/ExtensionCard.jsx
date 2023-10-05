import { dots } from "../assets/images";

const ExtensionCard = ({ title, desc, img, link, order }) => (
  <div
    className={`py-8 flex flex-col items-center shadow-lg top-12 max-md:p-8 h-fit`}
    style={{ marginTop: `${order * 2}rem` }}
  >
    <img src={img} alt={title} className="my-8" />
    <h3 className="text-2xl">{title}</h3>
    <p className="text-grayish-blue mt-2 mb-8">{desc}</p>
    <img src={dots} alt="" />
    <a
      href={link}
      className="mt-4 px-5 py-3 text-white bg-soft-blue rounded-lg"
    >
      Add & Install Extension
    </a>
  </div>
);
export default ExtensionCard;
