import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <div className='container mx-auto'>
                {/* <Navbar></Navbar> */}
            </div>
            {/* Components */}
            <div className='min-h-[calc(100vh-357px)]'>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer
            title={'Gadget Heaven'}
            subtitle={'Leading the way in cutting-edge technology and innovation.'}
            ></Footer>
        </div>
    );
};

export default MainLayouts;