import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import { useEffect, useState } from 'react';

const Products = () => {

    const items = useLoaderData();

    const {category} = useParams();

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
            if(category === 'iPhone'){
                console.log(category)
            }
            if(category){
                const filterByCategory = [...items].filter((item) => item.category === category);
                
                setCategoryData(filterByCategory);
            }
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