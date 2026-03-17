import { Helmet } from "react-helmet-async";
import { CiCircleRemove } from "react-icons/ci";

const Cart = ({cart, handleRemove}) => {


    const {id, image, name, description, price} = cart;


    return (

    <div id="cart" className="flex flex-col sm:flex-row justify-between p-3 sm:p-4 md:p-5 rounded-xl bg-white items-center mb-4 sm:mb-5 md:mb-6 gap-3 sm:gap-0">

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-center w-full sm:w-auto">
    <img
      className="w-40 sm:w-32 md:w-38 h-40 sm:h-auto rounded-lg object-contain shrink-0"
      src={image}
      alt={name}
    />

    <div className="flex flex-col gap-y-2 sm:gap-y-3 text-center sm:text-left">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
        {name}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-[rgba(9,8,15,0.6)]">
        {description}
      </p>
      <p className="text-base sm:text-lg md:text-xl font-semibold text-[rgba(9,8,15,0.8)]">
        Price: ${price}
      </p>
    </div>
  </div>

  <button onClick={() => handleRemove(id)}>
    <CiCircleRemove className="text-red-500 size-8 sm:size-9 md:size-10 cursor-pointer" />
  </button>

  {/* Dynamic Titles */}
  <Helmet>
    <title>Dashboard || Cart</title>
  </Helmet>
</div>
    );
};

export default Cart;