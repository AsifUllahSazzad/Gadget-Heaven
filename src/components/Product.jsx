import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, name, price } = product;

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
  <div className="p-3 sm:p-4 md:p-5">
    <figure className="w-full h-48 sm:h-56 md:h-64 lg:h-70 flex items-center justify-center bg-gray-100 p-3 sm:p-4 md:p-5 rounded-xl">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt={name}
      />
    </figure>
  </div>
  <div className="card-body p-3 sm:p-4 md:p-5">
    <h2 className="card-title text-base sm:text-lg md:text-xl">{name}</h2>
    <h3 className="text-[rgba(9,8,15,0.6)] text-sm sm:text-base md:text-lg font-medium">
      Price: ${price}
    </h3>
    <div className="card-actions justify-start mt-1 sm:mt-2">
      <NavLink
        to={`/product/${id}`}
        className="btn btn-primary btn-sm sm:btn-md"
      >
        View Details
      </NavLink>
    </div>
  </div>
</div>
    </div>
  );
};

export default Product;
