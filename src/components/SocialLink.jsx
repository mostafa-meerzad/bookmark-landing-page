const SocialLink = ({name, url, img}) => {
  return (
    <a href={url} >
      <img src={img} alt={name} />
    </a>
  );
};
export default SocialLink;
