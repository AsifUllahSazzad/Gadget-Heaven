import Heading from "../components/Heading";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { addData, getStoredData, removeData } from "../utilities";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import toast from "react-hot-toast";
import GroupImage from '../assets/Group.png'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isCartOrWishlist, setIsCartOrWishlist] = useState("cart");

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

  const handleTheCart = () => {
    setIsCartOrWishlist("cart");
  };

  
  const handleWishlist = () => {
    setIsCartOrWishlist("wishlist");
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

    const navigate = useNavigate();

    const handleCloseBtn = () =>{
      localStorage.removeItem('cart');
      setCarts([]);

      navigate('/');
    }


  return (
    <div>
      {/* Dynamic Titles */}
      <Helmet>
        <title>Dashboard</title>
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

        <div className="flex justify-center items-center gap-x-5 pb-5">
          <button
            onClick={handleTheCart}
            className={`btn rounded-3xl text-lg px-10 py-5 ${isCartOrWishlist === "cart" ? "bg-white font-extrabold text-[rgba(149,56,226,1)]" : "text-white border-white bg-[rgba(149,56,226,1)] font-medium"}`}
          >
            Cart
          </button>
          <button
            onClick={handleWishlist}
            className={` btn rounded-3xl px-10 text-lg py-5  ${isCartOrWishlist === "wishlist" ? "bg-white font-extrabold text-[rgba(149,56,226,1)]" : "text-white border-white bg-[rgba(149,56,226,1)] font-medium"}`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {isCartOrWishlist === "cart" ? "Cart" : "WishList"}
          </h1>

          {isCartOrWishlist === "cart" ? (
            <div className="flex items-center gap-x-5">
              <h1 className="text-2xl font-bold">Total cost: {totalPrice}</h1>

              <button onClick={handleSortByPrice} className="btn btn-primary">
                Sort by Price <FaSortNumericUpAlt />
              </button>

              <button
              disabled={purchaseBtn}
              onClick={handleThePurchase}
              className="btn btn-primary">Purchase</button>

                {/* Modal */}
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-y-3 w-1/3">
          <img className="size-18" src={GroupImage} alt="Payment Image" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="text-base font-medium text-[rgba(9,8,15,0.6)]">Thanks for purchasing.</p>
          <p className="text-base font-medium text-[rgba(9,8,15,0.6)]">Total: {totalPrice}</p>
          <div className="modal-action mt-2 w-full">
            <form method="dialog" className="w-full">

              <button
              onClick={handleCloseBtn}
              className="btn w-full rounded-4xl bg-[rgba(17,0,0,0.05)]">Close</button>
            </form>
          </div>
        </div>
      </dialog>
            

            </div>
          ) : null}
        </div>
      </div>

      {isCartOrWishlist === "cart" ? (
        <div className="container mx-auto">
          {carts.map((cart, index) => (
            <Cart handleRemove={handleRemove} key={index} cart={cart}></Cart>
          ))}
        </div>
      )
      :
      (
         <div className="container mx-auto">
         {
          wishlists.map((wishlist,index) => <Wishlist
          key={index}
          wishlist={wishlist}
          handleRemove={handleRemove}
          handleAddToCard={handleAddToCard}
          ></Wishlist>)
         }
        </div>
      )
      }
    </div>
  );
};

export default Dashboard;
