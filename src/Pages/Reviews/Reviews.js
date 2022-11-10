import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Contexts/AuthContext';
import Fake from '../Fake/Fake';

const Reviews = () => {
    const { user } = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);



    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
        // .then(data => console.log(data))
    }, [user?.email])

    console.log(reviews.length);

    const handledelet = id => {
        const proceed = window.confirm('Are you sure?? Delet !!');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }




    return (

        <>

            {
                reviews.map(review => <Fake
                    key={review._id}
                    review={review}
                    handledelet={handledelet}
                ></Fake>)
            }


            {/* <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <tbody>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div> */}

        </>



    );
};

export default Reviews;