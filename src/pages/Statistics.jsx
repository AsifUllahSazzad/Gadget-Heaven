import Heading from '../components/Heading';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {

    const data = useLoaderData();


    return (
        <div>
            {/* Dynamic Titles */}
                  <Helmet>
                    <title>Statistics | Gadget Heaven</title>
                  </Helmet>


            {/* Heading */}
            <div className='bg-[rgba(149,56,226,1)]'>
                <Heading
                title={'Statistics'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                ></Heading>
            </div>

            {/* Data */}
<div className='container mx-auto py-10'>
                <h1 className='text-2xl font-bold'>Statistics</h1>



<div className='mt-5 bg-white rounded-2xl'>


            <ComposedChart
      style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 50,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
       <CartesianGrid stroke="#f5f5f5" />
      <XAxis name='Name' dataKey="name" scale="band" interval={1} tick={{fontSize: 14}} />

      <YAxis yAxisId='left' width="auto"/>

      <YAxis yAxisId="right" orientation="right" />

      
      <Tooltip />
      <Legend />

      {/* Price */}
      <Bar yAxisId='left' name='Price' dataKey="price" barSize={20} fill="#413ea0" />
      

      {/* Total */}
      <Area yAxisId='left' type="monotone" name='Total' dataKey="price" fill="#8884d8" stroke="#8884d8" />

     {/* Rating */}
        <Line  yAxisId='right' name='Rating' type="monotone" dataKey="rating" stroke='red' />

      <RechartsDevtools />
    </ComposedChart>

</div>




</div>
        </div>
    );
};

export default Statistics;