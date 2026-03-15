import React from 'react';
import Heading from '../components/Heading';

const Dashboard = () => {
    return (
        <div>
           <div className='bg-[rgba(149,56,226,1)]'>
                {/* Heading */}
                <Heading
                title={'Dashboard'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                ></Heading>

                <div className='flex justify-center items-center gap-x-5 pb-5'>
                    <button className='btn rounded-3xl text-lg px-10 py-5 font-medium'>Cart</button>
                    <button className='btn rounded-3xl px-10 text-lg py-5 font-medium'>Wishlist</button>
                </div>
           </div>
        </div>
    );
};

export default Dashboard;