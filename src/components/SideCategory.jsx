import { NavLink } from "react-router-dom";

const SideCategory = ({category}) => {


  return (
    <div role="tablist" className="tabs bg-white p-8 rounded-2xl border border-[rgba(9,8,15,0.1)] ">

       <div className="flex flex-col gap-y-5">
         {
            category.map((c) => <NavLink
            key={c.id}
            role="tab"
            to={c.category === 'All Product' ? '/' : `/category/${c.category}`}
            className={({isActive}) => `tab bg-[rgba(9,8,15,0.05)] text-lg text-[rgba(9,8,15,0.6)] rounded-3xl font-medium justify-start! px-5 ${isActive ? 'text-white font-extrabold! tab-acitve bg-[rgba(149,56,226,1)]' : null}`}
            >{c.category}</NavLink>)
        }
       </div>
        

    </div>
  );
};

export default SideCategory;
