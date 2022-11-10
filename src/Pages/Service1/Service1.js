import React from 'react';
import { Link } from 'react-router-dom';


const Service1 = ({ service1 }) => {
    // console.log(service1);
    const { _id, title, img, text } = service1;
    // 

    // cv
    // 
    // 
    //
    //  
    // 
    // 




    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service6/${_id}`}>
                            <button className="btn btn-primary">See Full Service</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service1;