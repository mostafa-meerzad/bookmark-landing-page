const ContactForm = () => {
  return (
    <form action="#" className="flex justify-center gap-4 max-md:flex-col px-4">
    <input
      type="email"
      required
      placeholder="Enter your email address "
      className="py-3 px-5 rounded-lg text-black focus:outline-soft-red"
    />
    <button className="text-white bg-soft-red py-3 px-5 rounded-lg">
      Contact Us
    </button>
  </form>
  )
}
export default ContactForm