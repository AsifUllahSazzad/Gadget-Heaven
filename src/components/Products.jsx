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
        
        <div className="w-3/1 min-h-112.5 flex justify-center items-center mx-auto">
            <h1 className="text-5xl font-bold text-[rgba(149,56,226,1)]">No Data Found</h1>
        </div>      

      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryData.map((data) => (
            <Product key={data.id} product={data}></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
