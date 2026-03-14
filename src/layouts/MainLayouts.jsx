import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const MainLayouts = () => {

    const location = useLocation();

    const isHome = location.pathname === '/';



    return (
        <div className='flex flex-col bg-[rgba(246,246,246,1)]'>

            {/* Navbar */}

            {
                isHome ?
            (<Banner
            title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></Banner>)
            :
            (<div className='container mx-auto'>
                <Navbar></Navbar>
            </div>)

            }

            {/* Components */}
            <main className='grow min-h-screen'>
                <Outlet></Outlet>
            </main>

            {/* Footer */}
            <Footer
            title={'Gadget Heaven'}
            subtitle={'Leading the way in cutting-edge technology and innovation.'}
            ></Footer>
        </div>
    );
};

export default MainLayouts;