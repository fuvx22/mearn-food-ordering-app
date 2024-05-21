const Footer = () => {
  return (
    <div className="bg-orange-500 pt-10 pb-2">
      <div className="pb-5 container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MernEats.com
        </span>
        <span className="flex gap-4 text-white font-bold tracking-tight">
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </span>
      </div>
      <h1 className="text-sm text-white text-center">&copy; 2024 copyright by Chris Blakely</h1>
    </div>
  );
}

export default Footer;