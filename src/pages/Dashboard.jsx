import Heading from "../components/Heading";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { getStoredData, removeData } from "../utilities";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
  const [isCartOrWishlist, setIsCartOrWishlist] = useState("cart");

  const [carts, setCarts] = useState(getStoredData('cart'));

  const [wishlists, setWishlists] = useState(getStoredData('wishlist'));


  const handleTheCart = () => {
    setIsCartOrWishlist("cart");
  };

  
  const handleWishlist = () => {
    setIsCartOrWishlist("wishlist");
  };

  const handleRemove = (id) => {
    removeData(id, isCartOrWishlist === 'cart' ? 'cart' : 'wishlist');

    const remainingData = getStoredData(isCartOrWishlist === 'cart' ? 'cart' : 'wishlist');

    setCarts(remainingData);
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


  return (
    <div>
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

              <button className="btn btn-primary">Purchase</button>
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
          ></Wishlist>)
         }
        </div>
      )
      }
    </div>
  );
};

export default Dashboard;
