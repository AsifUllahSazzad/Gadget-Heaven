import React from 'react';

const Wishlist = ({wishlist, handleRemove}) => {

        const {id, image, name, description, price} = wishlist;

    
    return (
        <div className="flex justify-between p-5 rounded-xl bg-white items-center mb-6">
        
                <div className="flex gap-5 items-center">
                     <img className="w-38  rounded-lg object-contain shrink-0"
                src={image} alt={name} />
        
            <div className="flex flex-col gap-y-3">
                <h3 className="text-2xl font-semibold">
                {name}
                </h3>
                <p className="text-lg text-[rgba(9,8,15,0.6)]">
                {description}
                </p>
                <p className="text-xl font-semibold text-[rgba(9,8,15,0.8)]">
                Price: ${price}
                </p>
            </div>
                </div>
        
             <button
             onClick={() => handleRemove(id)}
             ><CiCircleRemove className="text-red-500 size-10 cursor-pointer" /></button>
            </div>
    );
};

export default Wishlist;