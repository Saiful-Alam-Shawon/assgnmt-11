import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service1 from '../Service1/Service1';

const Service6 = () => {
    const service6 = useLoaderData()

    // console.log(service6);

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                service6.map(service1 => <Service1 key={service1._id} service1={service1}></Service1>)
            }
        </div>
    );
};

export default Service6;