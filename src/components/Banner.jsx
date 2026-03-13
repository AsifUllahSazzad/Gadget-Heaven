import HomeNavbar from "./HomeNavbar";
import HeroImage from "../assets/banner.jpg";

const Banner = ({ title, subtitle }) => {
  return (
    <div className="bg-[#9548e2] rounded-2xl p-2">
      <div className="container mx-auto h-120 space-y-6">
        
        {/* Navbar */}
        <HomeNavbar></HomeNavbar>

        {/* Heading */}
        <div className="text-white text-center space-y-6">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="w-182 mx-auto text-base font-thin">{subtitle}</p>
          <button className="btn rounded-3xl text-[#9538e2]">Shop Now</button>
        </div>

        {/* Hero Image */}
        <div className="w-fit p-4 rounded-3xl bg-white/50 mx-auto mt-8">
          <img
            className="w-fit h-120 object-cover mx-auto rounded-2xl"
            src={HeroImage}
            alt="VR"
          />
        </div>

        {/* Heading */}
        <h1 className="text-center font-bold text-4xl mt-10">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
    </div>
  );
};

export default Banner;