import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services,setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div>
           <div className='text-center'>
           <h2 className='text-3xl text-orange-500 '>Our Services</h2>
            <h2 className='text-5xl font-bold'>Our Services Area</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolores quis dicta libero aut tenetur blanditiis commodi quia aspernatur perspiciatis.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                Services.map(service => <ServiceCard
                key={service._id}
                service = {service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;