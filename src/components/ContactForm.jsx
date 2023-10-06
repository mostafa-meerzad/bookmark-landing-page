const ContactForm = () => {
  return (
    <form action="#" className="flex justify-center gap-4 max-md:flex-col px-4">
      <input
        type="email"
        required
        placeholder="Enter your email address "
        className="py-3 px-5 rounded-lg text-black focus:outline-soft-red"
      />
      <button className="w-28 h-12 text-white bg-soft-red flex justify-center items-center rounded-lg active:text-soft-red active:bg-white active:scale-[.98] transition-all ease-in-out hover:text-soft-red hover:bg-white hover:border-2 hover:border-soft-red ">
        Contact Us
      </button>
    </form>
  );
};
export default ContactForm;
