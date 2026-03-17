import { Outlet, useLoaderData } from 'react-router-dom';
import SideCategory from '../components/SideCategory';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    const categories = useLoaderData();

   


    return (
        <div>
            {/* Dynamic Titles */}
                  <Helmet>
                    <title>Home | Gadget Heaven</title>
                  </Helmet>

            {/* Category and Data */}
            <div className='container mx-auto mt-50 lg:mt-105'>
           
                <div className='flex flex-col lg:flex-row'>
                    {/* Side Category */}
                   <div className='lg:mr-10'>
                     <SideCategory category={categories}></SideCategory>
                   </div>

                    <Outlet></Outlet>
                </div>

            </div>                
            
        </div>
    );
};

export default Home;