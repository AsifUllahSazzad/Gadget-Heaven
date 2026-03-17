import { NavLink } from "react-router-dom";

const SideCategory = ({category}) => {


  return (
   <div
  role="tablist"
  className="tabs bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-[rgba(9,8,15,0.1)] mx-4 lg:mx-0 lg:mt-15 md:mt-40"
>
  <div className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 sm:gap-3 lg:gap-y-5">
    {category.map((c) => (
      <NavLink
        key={c.id}
        role="tab"
        to={c.category === "All Product" ? "/" : `/category/${c.category}`}
        className={({ isActive }) =>
          `tab bg-[rgba(9,8,15,0.05)] text-sm sm:text-base lg:text-lg text-[rgba(9,8,15,0.6)] rounded-3xl font-medium justify-start! px-3 sm:px-4 lg:px-5 py-2 whitespace-nowrap ${
            isActive
              ? "text-white font-extrabold! tab-active bg-[rgba(149,56,226,1)]"
              : null
          }`
        }
      >
        {c.category}
      </NavLink>
    ))}
  </div>
</div>
  );
};

export default SideCategory;
