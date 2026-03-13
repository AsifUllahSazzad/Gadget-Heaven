import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='flex flex-col bg-[rgba(246,246,246,1)]'>
            {/* Navbar */}
            <div className='container mx-auto'>
                {/* <Navbar></Navbar> */}
            </div>

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