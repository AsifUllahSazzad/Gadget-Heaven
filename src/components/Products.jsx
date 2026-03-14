import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import { useEffect, useState } from 'react';

const Products = () => {

    const items = useLoaderData();

    const {category} = useParams();

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
            let filterByCategory = [];


            if(!category || category === 'All Product'){
                setCategoryData(items);
            }
            if(category === 'Laptops'){
                filterByCategory = [...items].filter((item) => item.category === 'Laptop');

                setCategoryData(filterByCategory);
            }
            if(category === 'Phones'){
                filterByCategory = [...items].filter((item) => item.category === 'Phone');

                setCategoryData(filterByCategory);
            }
            if(category === 'Smart Watches'){
                filterByCategory = [...items].filter((item) => item.category === 'Smart Watch');

                setCategoryData(filterByCategory);
            }
            if(category === 'MacBook'){
                filterByCategory = [...items].filter((item) => item.name.includes('MacBook'));
                
                setCategoryData(filterByCategory);
            }
            if(category === 'iPhone'){
                filterByCategory = [...items].filter((item) => item.name.includes('iPhone'));

                setCategoryData(filterByCategory);
            }
            // else{
                
            // }
    }, [items, category])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                categoryData.map((data) => <Product
                key={data.id}
                product={data}
                ></Product>)
            }
        </div> 
    );
};

export default Products;