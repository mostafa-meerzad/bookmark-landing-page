const FooterLink = ({url, link}) => {
  return (
    <a href={url} className="text-xs">
    {link}
  </a>
  )
}
export default FooterLink