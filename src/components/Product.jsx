import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, name, price } = product;

  return (
    <div>
      <div className="card bg-base-100 w-full min-w-0 overflow-hidden shadow-sm rounded-2xl">
  <div className="p-5">
    <figure className="w-full h-70 flex items-center justify-center bg-gray-100 p-5 rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt={name}
      />
    </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className="text-[rgba(9,8,15,0.6)] text-lg font-medium">
      Price: ${price}
    </h3>
    <div className="card-actions justify-start">
      <NavLink to={`/product/${id}`} className="btn btn-primary">
        View Details
      </NavLink>
    </div>
  </div>
</div>
    </div>
  );
};

export default Product;
