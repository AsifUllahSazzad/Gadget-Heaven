import Hero from './Hero';
import HomeNavbar from './HomeNavbar';

const Banner = ({title, subtitle}) => {
    return (
        <div className='bg-[#9548e2]'>

            <div className='container mx-auto'>
            {/* Navbar */}
                 <HomeNavbar></HomeNavbar>

            {/* Heading */}
                    <div className='text-white text-center space-y-6'>
                        <h1 className='text-5xl font-bold'>{title}</h1>
                        <p className='w-182 mx-auto text-base font-thin'>{subtitle}</p>
                        <button className='btn rounded-3xl text-[#9538e2]'>Shop Now</button>
                    </div>

            {/* Hero Image */}
                    <div>
                        <Hero></Hero>
                    </div>
            </div>
        </div>
    );
};

export default Banner;