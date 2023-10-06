import BookMark from "../components/BookMark";
import ContactForm from "../components/ContactForm";
import FooterLink from "../components/FooterLink";
import SocialLink from "../components/SocialLink";
import { footerLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="">
      <section className="text-center py-12 bg-soft-blue text-white ">
        <p className="text-xs tracking-[.33rem]">35,000+ already joined</p>
        <p className="text-xl font-semibold my-8 max-w-[16rem] mx-auto">
          Stay up-to-date with what we’re doing
        </p>
        <ContactForm />
      </section>

      <section className="flex max-md:justify-center max-md:flex-col  justify-between bg-very-dark-blue text-white p-4  gap-4  max-md:px-4 max-lg:px-[5%] px-[10%]  ">
        <div className="flex max-md:flex-col justify-around items-center gap-4">
          <BookMark color="white" />
          {footerLinks.map((link) => (
            <FooterLink {...link} key={link.link} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.name}/>
          ))}
        </div>
      </section>
    </footer>
  );
};
export default Footer;
