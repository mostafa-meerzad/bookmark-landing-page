const HeaderLink = ({ className, name, url }) => {
  return (
    <li className={className + "hover:text-gray-500 active:scale-[97%] transition-all ease-in-out"}>
      <a href={url}>{name}</a>
    </li>
  );
};
export default HeaderLink;
