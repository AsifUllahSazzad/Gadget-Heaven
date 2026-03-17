import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import starIcon from '../assets/star.png';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { addData, getStoredData } from "../utilities";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const ProductDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();


    const [singleProduct, setSingleProduct] = useState({});

    const [isWishlist, setIsWishlist] = useState(false);
    
    useEffect(() => {


        const findData = [...data].find((d) => d.id === parseInt(id));


        setSingleProduct(findData);


        const wishlistData = getStoredData('wishlist');

        const isExist = wishlistData.find((item) => item.id === findData.id);


        if(isExist){
            setIsWishlist(true);
        }

    }, [data, id])
    

    const {image, name, price, stock_status, description, rating, specification} = singleProduct;

    const handleAddToCard = (id) =>{
        const findData = data.find((d) => d.id === id);

        addData(findData, 'cart')

        toast.success('Added to your cart! 🛒');
    }


    const handleTheWishlist = (id) =>{
        const findData = data.find((d) => d.id === id);

        addData(findData, 'wishlist');

        setIsWishlist(true)

        toast.success('Added to your wishlist! ❤️');
    }


    return (
        <div>

            <Helmet>
                <title>Product Details | Gadget Heaven</title>
            </Helmet>

           {/* Heading */}
<div className="bg-[rgba(149,56,226,1)] h-80 max-sm:mb-140">
  <Heading
    title={"Product Details"}
    subtitle={
      "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    }
  ></Heading>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Box */}
    <div className="card bg-base-100 shadow-sm grid grid-cols-1 md:grid-cols-2 p-4 sm:p-6 md:p-8 gap-6 md:gap-x-8 rounded-2xl items-center mb-6 md:mb-0">

      <figure className="bg-gray-100 p-4 sm:p-5 rounded-xl h-64 sm:h-80 md:h-96 lg:h-120">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={name}
        />
      </figure>

      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        <h2 className="card-title text-xl sm:text-2xl md:text-3xl">{name}</h2>
        <p className="font-semibold text-[rgba(9,8,15,0.8)] text-sm sm:text-base">
          Price: ${price}
        </p>
        <button className="text-lime-600 p-2 px-4 border rounded-4xl bg-gray-100 font-medium text-sm sm:text-base">
          {stock_status}
        </button>

        <p className="text-sm sm:text-base md:text-lg text-[rgba(9,8,15,0.6)]">
          {description}
        </p>

        <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg">
          <h5 className="text-sm sm:text-base md:text-lg font-bold">
            Specification:
          </h5>
          {specification &&
            Object.entries(specification).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ol>

        <p className="flex items-center text-sm sm:text-base md:text-lg font-bold gap-x-1">
          Rating{" "}
          <img className="size-5 sm:size-6" src={starIcon} alt="Rating" />
        </p>

        <div className="flex items-center gap-x-3">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${star} star`}
                checked={star === Math.floor(rating)}
                readOnly
              />
            ))}
          </div>
          <p className="text-sm text-[rgba(9,8,15,0.8)] font-medium">{rating}</p>
        </div>

        <div className="card-actions justify-start items-center gap-x-3 sm:gap-x-4 flex-wrap">
          <button
            onClick={() => handleAddToCard(singleProduct.id)}
            className="text-white btn btn-sm sm:btn-md bg-[rgba(149,56,226,1)]"
          >
            Add To Card <BsCart3 className="text-lg sm:text-xl" />
          </button>
          <button
            disabled={isWishlist}
            onClick={() => handleTheWishlist(singleProduct.id)}
            className="btn btn-circle btn-sm sm:btn-md bg-white hover:bg-red-300"
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




        </div>
    );
};

export default ProductDetails;