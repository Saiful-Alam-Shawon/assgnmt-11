import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';
import ShowReviews from '../ShowReviews/ShowReviews';

const ServiceDetails = () => {
    const { title, img, price, text, _id, email } = useLoaderData();
    const { user } = useContext(AuthProvider)
    const [showreviews, setShowreviews] = useState([]);
    const userEmail = user?.email;
    // console.log(email1);

    // https://n-beta-coral.vercel.app/review?id=636a5fb43a9ee93c0315068a

    useEffect(() => {
        fetch(`https://n-beta-coral.vercel.app/review?id=${_id}`)
            .then(res => res.json())
            .then(data => setShowreviews(data))
        // .then(data => console.log(data))
    }, [_id])

    // console.log(reviews.length);
    //     {
    //         !userEmail
    //         ? <>
    //             alert('Please Login')
    //         </>
    //         :<div>
    // const handleReview = (event) => {
    //     //     event.preventDefault();
    //     //     const form = event.target;
    //     //     const name = form.name.value;
    //     //     const photo = form.photo.value;
    //     //     const number = form.number.value;
    //     //     const email = form.email.value;
    //     //     const message = form.message.value



    //     //     const reviewObject = {
    //     //         id: _id,
    //     //         name,
    //     //         photo,
    //     //         number,
    //     //         message,
    //     //         email

    //     //     }
    //     //     // console.log(name, photo, number, email, reviewObject.id, message);

    //     //     fetch('https://n-beta-coral.vercel.app/reviews', {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'content-type': 'application/json'
    //     //         },
    //     //         body: JSON.stringify(reviewObject)
    //     //     })
    //     //         .then(res => res.json())
    //     //         .then(data => {
    //     //             console.log(data)
    //     //             if (data.acknowledged) {
    //     //                 alert('Order Placed Successfully')
    //     //                 form.reset();
    //     //             }
    //     //         })
    //     //         .catch(er => console.error(er));

    //     // }
    //     </div>    }



    const handleReview = (event) => {
        event.preventDefault();
        { !userEmail && alert("Please Login") }
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const number = form.number.value;
        const email = form.email.value;
        const message = form.message.value



        const reviewObject = {
            id: _id,
            name,
            photo,
            number,
            message,
            email

        }
        // console.log(name, photo, number, email, reviewObject.id, message);

        fetch('https://n-beta-coral.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }


    return (
        <>
            {/* // Service Card Details.................. */}

            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto  space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div >
                            <a rel="noopener noreferrer" href="# " className="inline-block text-2xl font-semibold sm:text-3xl">{title}</a>
                            <p className="text-xl dark:text-gray-400">{price}
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Others Reviews On the Side */}

            {
                showreviews.map(showreview => <ShowReviews
                    key={showreview._id}
                    showreview={showreview}
                ></ShowReviews>)
            }

            {/* <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div> */}
            {/* {!userEmail? alert("Please Login"):{handleReview} } handleReview */}


            {/* Review Us */}

            <div className='mx-auto'>
                <form onSubmit={handleReview} className='text-center mt-10' >
                    <h2 className='text-4xl text-bold'>Rate US </h2>
                    <div className='grid grid-cols-2 gap-4 '>
                        <div><input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" /></div>
                        <div><input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" /></div>
                        <div><input type="text" name="number" placeholder="Price" className="input input-bordered w-full max-w-xs" /></div>
                        <div><input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full max-w-xs" readOnly /></div>
                    </div>
                    <div>
                        <div className="form-control w-4/5 mx-auto">
                            <label className="label">
                                <span className="label-text">Your Description</span>

                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='message' placeholder="Text Here"></textarea>



                        </div>
                        <button className="btn my-5">Submit</button>
                    </div>
                </form>
            </div>



        </>



    );
};

export default ServiceDetails;