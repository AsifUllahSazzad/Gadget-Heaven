import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { Toaster } from 'react-hot-toast';
import { getStoredData } from '../utilities';
import { createContext } from 'react';


const AssetContext = createContext([0,0]);

const MainLayouts = () => {

    const location = useLocation();


    const isHome = location.pathname === '/' || location.pathname.startsWith('/category');

     const cartLength = getStoredData('cart').length;
    const wishlistLength = getStoredData('wishlist').length;

    return (
        <div>
            {/* Toast */}
            <Toaster></Toaster>

            <AssetContext.Provider value={{cartLength, wishlistLength}}>

            <div className='flex flex-col bg-[rgba(246,246,246,1)]'>
            {/* Navbar */}

            {
                isHome ?
            (<Banner
            title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></Banner>)
            :
            (<div className='bg-base-100'>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>)

            }

            {/* Components */}
            <main className='grow min-h-screen mb-20'>
                <Outlet></Outlet>
            </main>

        </div>

            {/* Footer */}
            <Footer
            title={'Gadget Heaven'}
            subtitle={'Leading the way in cutting-edge technology and innovation.'}
            ></Footer>

            </AssetContext.Provider>
        </div>
    );
};

export default MainLayouts;
export {AssetContext};