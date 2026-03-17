import Heading from "../components/Heading";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { addData, getStoredData, removeData } from "../utilities";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import toast from "react-hot-toast";
import GroupImage from '../assets/Group.png'
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isCartOrWishlist, setIsCartOrWishlist] = useState("");

  const [carts, setCarts] = useState(getStoredData('cart'));

  const [wishlists, setWishlists] = useState(getStoredData('wishlist'));

  const [purchaseBtn, setPurchaseBtn] = useState(true);

  useEffect(() => {
      const cartData = getStoredData('cart');

      if(cartData.length){
        setPurchaseBtn(false)
      }
      else{
        setPurchaseBtn(true)
      }
      
  }, [carts, purchaseBtn])


   const location = useLocation();

   useEffect(() => {
     if(location.hash === ''){
       setIsCartOrWishlist('cart')
      }
      else if(location.hash === '#cart'){
        setIsCartOrWishlist('cart')
      }
      else if(location.hash === '#wishlist'){
        setIsCartOrWishlist('wishlist');
      }   
   } ,[location])

   const navigate = useNavigate();

  const handleTheCart = () => {
    setIsCartOrWishlist("cart");
    navigate('#cart')
  };

  const handleWishlist = () => {
    setIsCartOrWishlist("wishlist");
    navigate('#wishlist')
  };

  const handleRemove = (id) => {
    removeData(id, isCartOrWishlist === 'cart' ? 'cart' : 'wishlist');

    const remainingData = getStoredData(isCartOrWishlist === 'cart' ? 'cart' : 'wishlist');

    if(isCartOrWishlist === 'cart'){
      setCarts(remainingData);
    }
    
    if(isCartOrWishlist === 'wishlist'){
      setWishlists(remainingData);
    }
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = carts.reduce(
  (total, item) => total + (item?.price || 0),
  0
);
    setTotalPrice(totalPrice);
  }, [carts]);

  const handleSortByPrice = () => {
    const sortByPrice = [...carts].sort((a, b) => b.price - a.price);

    setCarts(sortByPrice);
  };

    const handleAddToCard = (wishlist) =>{
        addData(wishlist, 'cart');

        setCarts(getStoredData('cart'))

        toast.success('Added to your cart! 🛒');

    }

    const handleThePurchase = () =>{
      document.getElementById('my_modal_5').showModal();
    }


    const handleCloseBtn = () =>{
      localStorage.removeItem('cart');
      setCarts([]);

      navigate('/');
    }


  return (
    <div>
      {/* Dynamic Titles */}
      <Helmet>
        {isCartOrWishlist === 'cart' ? <title>Dashboard | Cart</title> : <title>Dashboard | Wishlist</title>}
      </Helmet>
      
      {/* Content */}
<div className="bg-[rgba(149,56,226,1)]">
  {/* Heading */}
  <Heading
    title={"Dashboard"}
    subtitle={
      "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    }
  ></Heading>

  <div className="flex justify-center items-center gap-x-3 sm:gap-x-4 md:gap-x-5 pb-3 sm:pb-4 md:pb-5 px-4 sm:px-0">
    <button
      onClick={handleTheCart}
      className={`btn rounded-3xl text-sm sm:text-base md:text-lg px-5 sm:px-7 md:px-10 py-3 sm:py-4 md:py-5 ${
        isCartOrWishlist === "cart"
          ? "bg-white font-extrabold text-[rgba(149,56,226,1)]"
          : "text-white border-white bg-[rgba(149,56,226,1)] font-medium"
      }`}
    >
      Cart
    </button>
    <button
      onClick={handleWishlist}
      className={`btn rounded-3xl text-sm sm:text-base md:text-lg px-5 sm:px-7 md:px-10 py-3 sm:py-4 md:py-5 ${
        isCartOrWishlist === "wishlist"
          ? "bg-white font-extrabold text-[rgba(149,56,226,1)]"
          : "text-white border-white bg-[rgba(149,56,226,1)] font-medium"
      }`}
    >
      Wishlist
    </button>
  </div>
</div>



      {/* Cart, Total Cost, Sorting, Purchase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">

  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">

    <h1 className="text-xl sm:text-2xl font-bold max-md:mx-auto">
      {isCartOrWishlist === "cart" ? "Cart" : "WishList"}
    </h1>

    {isCartOrWishlist === "cart" ? (
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-x-5 w-full sm:w-auto max-md:text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-full sm:w-auto">
          Total cost: {totalPrice}
        </h1>

        <div className="max-md:mx-auto space-x-3">
          <button
          onClick={handleSortByPrice}
          className="btn btn-primary btn-sm sm:btn-md"
        >
          Sort by Price <FaSortNumericUpAlt />
        </button>

        <button
          disabled={purchaseBtn}
          onClick={handleThePurchase}
          className="btn btn-primary btn-sm sm:btn-md"
        >
          Purchase
        </button>
        </div>

        {/* Modal */}
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box flex flex-col justify-center items-center gap-y-3 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 sm:px-6">
            <img className="size-14 sm:size-16 md:size-18" src={GroupImage} alt="Payment Image" />
            <h3 className="font-bold text-xl sm:text-2xl text-center">
              Payment Successfully
            </h3>
            <p className="text-sm sm:text-base font-medium text-[rgba(9,8,15,0.6)] text-center">
              Thanks for purchasing.
            </p>
            <p className="text-sm sm:text-base font-medium text-[rgba(9,8,15,0.6)] text-center">
              Total: {totalPrice}
            </p>
            <div className="modal-action mt-2 w-full">
              <form method="dialog" className="w-full">
                <button
                  onClick={handleCloseBtn}
                  className="btn w-full rounded-4xl bg-[rgba(17,0,0,0.05)]"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    ) : null}
  </div>
</div>







      {isCartOrWishlist === "cart" ? (
  <div id="cart" className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
    {carts.map((cart, index) => (
      <Cart handleRemove={handleRemove} key={index} cart={cart}></Cart>
    ))}
  </div>
) : (
  <div id="wishlist" className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
    {wishlists.map((wishlist, index) => (
      <Wishlist
        key={index}
        wishlist={wishlist}
        handleRemove={handleRemove}
        handleAddToCard={handleAddToCard}
      ></Wishlist>
    ))}
  </div>
)}
      
    </div>
  );
};

export default Dashboard;
