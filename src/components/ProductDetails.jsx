import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import starIcon from '../assets/star.png';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { addData } from "../utilities";


const ProductDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();


    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const findData = [...data].find((d) => d.id === parseInt(id));

        setSingleProduct(findData);

    }, [data, id])
    

    const {image, name, price, stock_status, description, rating, specification} = singleProduct;

    const handleAddToCard = (id) =>{
        const findData = data.find((d) => d.id === id);

        addData(findData, 'cart')
        
    }

    const handleTheWishlist = (id) =>{
        const findData = data.find((d) => d.id === id);

        addData(findData, 'wishlist');
    }


    return (
        <div>

            {/* Heading */}
           <div className="bg-[rgba(149,56,226,1)] h-80">
                <Heading
                title={'Product Details'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                ></Heading>

                <div className="container mx-auto">


                   {/* Box  */}
        <div className="card card-side bg-base-100 shadow-sm grid grid-cols-[1fr_1fr]! p-8 gap-x-8 rounded-2xl items-center">
        
            <figure className="bg-gray-100 p-5 rounded-xl h-120">
            <img
            className="h-full object-contain"
            src={image}
            alt={name} 
            />
        </figure>

  <div className="space-y-5">
    <h2 className="card-title text-3xl">{name}</h2>
    <p className="font-semibold text-[rgba(9,8,15,0.8)]">Price: ${price}</p>
    <button className="text-lime-600 p-2 px-4 border rounded-4xl bg-gray-100 font-medium">{stock_status}</button>

    <p className="text-lg text-[rgba(9,8,15,0.6)]">{description}</p>

    <ol className="list-decimal list-inside text-lg">
        <h5 className="text-lg font-bold">Specification:</h5>
       {
           specification && Object.entries(specification).map(([key, value]) => <li key={key}>{value}</li>)
       }
    </ol>

    <p className="flex items-center text-lg font-bold gap-x-1">Rating <img className="size-6" src={starIcon} alt="Rating" /></p>

    <div className="flex items-center gap-x-3">
        <div className="rating">
       {
        [1,2,3,4,5].map((star) => (
            <input
            key={star}
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-orange-400"
            aria-label={`${star} star`}
            checked={star === Math.floor(rating)}
            readOnly
            />
        ))
    }
    </div>
    <p className="text-sm text-[rgba(9,8,15,0.8)] font-medium">{rating}</p>
    </div>

    <div className="card-actions justify-start items-center gap-x-4">
      <button onClick={() => handleAddToCard(singleProduct.id)} className="text-white btn bg-[rgba(149,56,226,1)]">Add To Card <BsCart3 className="text-xl"/></button>
      <button
      onClick={() => handleTheWishlist(singleProduct.id)}
      className="btn btn-circle bg-white"><FaRegHeart /></button>
    </div>

  </div>


</div>

                </div>
           </div>
        </div>
    );
};

export default ProductDetails;