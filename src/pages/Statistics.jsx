import Heading from '../components/Heading';
import {ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
                <h1 className='text-2xl font-bold text-center'>Statistics</h1>



<div className='mt-5 bg-white rounded-2xl'>


           <ResponsiveContainer width="100%" height={300}>
  <ComposedChart
    data={data}
    margin={{
      top: 20,
      right: 10,
      bottom: 60,
      left: 0,
    }}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis
      name="Name"
      dataKey="name"
      scale="band"
      interval={0}
      tick={{ fontSize: 9 }}
      angle={-45}
      textAnchor="end"
      height={70}
    />

    <YAxis yAxisId="left" width={40} tick={{ fontSize: 10 }} />
    <YAxis yAxisId="right" orientation="right" width={40} tick={{ fontSize: 10 }} />

    <Tooltip />
    <Legend wrapperStyle={{ fontSize: "11px" }} />

    {/* Price */}
    <Bar yAxisId="left" name="Price" dataKey="price" barSize={10} fill="#413ea0" />

    {/* Total */}
    <Area
      yAxisId="left"
      type="monotone"
      name="Total"
      dataKey="price"
      fill="#8884d8"
      stroke="#8884d8"
    />

    {/* Rating */}
    <Line
      yAxisId="right"
      name="Rating"
      type="monotone"
      dataKey="rating"
      stroke="red"
    />

    <RechartsDevtools />
  </ComposedChart>
</ResponsiveContainer>

</div>




</div>




        </div>
    );
};

export default Statistics;