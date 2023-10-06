const SocialLink = ({name, url, img}) => {
  return (
    <a href={url} >
      <img src={img} alt={name} className="hover:scale-[110%]" />
    </a>
  );
};
export default SocialLink;
