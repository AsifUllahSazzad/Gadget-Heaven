import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { useEffect, useState } from "react";

const ProductDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();


    const [singleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        const findData = [...data].find((d) => d.id === parseInt(id));

        setSingleProduct(findData);
    }, [data, id])


    const {image, name, price, stock_status, description, rating, specification} = singleProduct;




    return (
        <div>

            {/* Heading */}
           <div className="bg-[rgba(149,56,226,1)] h-80">
                <Heading
                title={'Product Details'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                ></Heading>

                <div className="container mx-auto">
                   
                   <div className="card card-side bg-base-100 shadow-sm">
        
        <div className="p-5">
            <figure className="bg-gray-100 p-5 rounded-xl">
            <img
            className=""
            src={image}
            alt={name} />
        </figure>
        </div>

  <div className="">
    <h2 className="card-title text-3xl">{name}</h2>
    <p className="font-semibold text-[rgba(9,8,15,0.8)]">Price: ${price}</p>
    <button className="text-lime-600 p-2 px-4 border rounded-4xl bg-gray-100 font-medium">{stock_status}</button>

    <p className="text-lg text-[rgba(9,8,15,0.6)]">{description}</p>

        <h5 className="text-lg font-bold">Specification:</h5>
    <ol className="list-decimal list-inside text-[rgba(9,8,15,0.6)] text-lg">
       {
           specification && Object.entries(specification).map(([key, value]) => <li key={key}>{value}</li>)
       }
    </ol>

    <p>Rating</p>

    <div className="card-actions justify-start">
      <button className="btn btn-primary">Add To Card</button>
    </div>
  </div>
</div>

                </div>
           </div>
        </div>
    );
};

export default ProductDetails;