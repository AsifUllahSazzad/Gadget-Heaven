import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Products from '../components/Products';
import SideCategory from '../components/SideCategory';

const Home = () => {

    const categories = useLoaderData();


    return (
        <div>
            {/* Category and Data */}
            <div className='container mx-auto mt-130'>
           
                <div className='flex'>
                    {/* Side Category */}
                   <div className='mr-10'>
                     <SideCategory category={categories}></SideCategory>
                   </div>

                    <Outlet></Outlet>
                </div>

            </div>
            
        </div>
    );
};

export default Home;