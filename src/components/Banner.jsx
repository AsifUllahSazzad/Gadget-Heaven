import HomeNavbar from "./HomeNavbar";
import HeroImage from "../assets/banner.jpg";

const Banner = ({ title, subtitle }) => {
  return (
    <div className="bg-[#9548e2] rounded-2xl p-2 m-5">
      <div className="container mx-auto h-120 space-y-6">
        {/* Navbar */}
        <HomeNavbar></HomeNavbar>

        {/* Heading */}
<div className="text-white text-center space-y-4 sm:space-y-6 px-4">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-300 mx-auto leading-tight">
    {title}
  </h1>
  <p className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-182 mx-auto text-sm sm:text-base font-thin">
    {subtitle}
  </p>

  <a href="#shop">
    <button className="btn rounded-3xl text-[#9538e2]">Shop Now</button>
  </a>
</div>

   {/* Hero Image */}
<div className="w-fit p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl bg-white/50 mx-auto mt-6 sm:mt-8">
  <img
    className="w-full h-48 sm:h-72 md:h-96 lg:h-120 object-cover mx-auto rounded-xl sm:rounded-2xl"
    src={HeroImage}
    alt="VR"
  />
</div>

{/* Heading */}
<h1
  id="shop"
  className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-8 md:mt-10 px-4"
>
  Explore Cutting-Edge Gadgets
</h1>


      </div>



    </div>
  );
};

export default Banner;
