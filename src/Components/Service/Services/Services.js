import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = ({ service }) => {

    const { _id, title, img, text, price } = service
    // console.log(id)
    return (


        <PhotoProvider>

            <div className="card  bg-base-100 shadow-xl">
                <figure>
                    <PhotoView className='bg-white'>
                        <img className='image-size' src={img} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-bold text-orange-500'>{price}</p>

                    {text.length > 100 ?
                        <p> {text.slice(0, 100) + "..."} <Link to={`/service6/3/${_id}`} className='text-orange-900'> Read More</Link>  </p> : <p> {text} </p>
                    }

                    <div className="card-actions justify-end">
                        <Link to={`/service6/3/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>


    );
};

export default Services;