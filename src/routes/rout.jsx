import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("../categories.json");
          return await res.json();
        },
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: async () => {
              const res = await fetch("../data.json");
              const data = await res.json();
              return data;
            },
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: async () => {
              const res = await fetch("../data.json");
              const data = await res.json();
              return data;
            },
          },
        ]
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async () => {
          const res = await fetch("../data.json");
          return await res.json();
        },
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
