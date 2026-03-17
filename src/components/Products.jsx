import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const items = useLoaderData();

  const { category } = useParams();

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    let filterByCategory = [];

    if (!category || category === "All Product") {
      setCategoryData(items);
    } else if (category === "Laptops") {
      filterByCategory = [...items].filter(
        (item) => item.category === "Laptop",
      );

      setCategoryData(filterByCategory);
    } else if (category === "Phones") {
      filterByCategory = [...items].filter((item) => item.category === "Phone");

      setCategoryData(filterByCategory);
    } else if (category === "Smart Watches") {
      filterByCategory = [...items].filter(
        (item) => item.category === "Smart Watch",
      );

      setCategoryData(filterByCategory);
    } else if (category === "MacBook") {
      filterByCategory = [...items].filter((item) =>
        item.name.includes("MacBook"),
      );

      setCategoryData(filterByCategory);
    } else if (category === "iPhone") {
      filterByCategory = [...items].filter((item) =>
        item.name.includes("iPhone"),
      );

      setCategoryData(filterByCategory);
    } else {
      setCategoryData([]);
    }
  }, [items, category]);

  return (
    <div>
  {categoryData.length === 0 ? (

    <div className="w-full min-h-48 sm:min-h-64 md:min-h-80 lg:min-h-112.5 flex justify-center items-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(149,56,226,1)] text-center">
        No Data Found
      </h1>
    </div>

  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mx-4 lg:mx-0 max-lg:mt-5">
      {categoryData.map((data) => (
        <Product key={data.id} product={data}></Product>
      ))}
    </div>
  )}
</div>
  );
};

export default Products;
