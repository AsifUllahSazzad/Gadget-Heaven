import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='text-center space-y-3 p-5'>
            <h2 className='text-white text-4xl font-bold'>{title}</h2>
            <p className='mx-auto w-2/5 text-white text-base font-normal'>{subtitle}</p>
        </div>
    );
};

export default Heading;