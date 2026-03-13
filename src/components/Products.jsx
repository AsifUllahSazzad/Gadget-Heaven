import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const loaderData = useLoaderData();


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                loaderData.map((data) => <Product
                key={data.id}
                product={data}
                ></Product>)
            }
        </div> 
    );
};

export default Products;