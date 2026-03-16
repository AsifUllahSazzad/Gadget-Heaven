import { Helmet } from "react-helmet-async";
import { CiCircleRemove } from "react-icons/ci";

const Wishlist = ({wishlist, handleRemove, handleAddToCard}) => {

    const {id, image, name, description, price} = wishlist;
    return (
        <div id="wishlist" className="flex justify-between p-5 rounded-xl bg-white items-center mb-6">
        
        <div className="flex gap-5 items-center">
                     <img className="w-38  rounded-lg object-contain shrink-0"
                src={image} alt={name} />
        
            <div className="flex flex-col gap-y-3">
                <h3 className="text-2xl font-semibold">
                {name}
                </h3>
                <p className="text-lg text-[rgba(9,8,15,0.6)]">
                <span className="text-black">Description:</span> {description}
                </p>
                <p className="text-xl font-semibold text-[rgba(9,8,15,0.8)]">
                Price: ${price}
                </p>

                <button 
                onClick={() => handleAddToCard(wishlist)}
                className="btn w-40 rounded-2xl bg-[rgba(149,56,226,1)] text-white font-medium">Add to Card</button>
            </div>

        </div>
        
             <button
             onClick={() => handleRemove(id)}
             ><CiCircleRemove className="text-red-500 size-10 cursor-pointer" /></button>
            </div>
    );
};

export default Wishlist;