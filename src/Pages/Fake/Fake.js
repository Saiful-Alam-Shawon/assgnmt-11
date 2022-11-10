import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Fake = ({ review, handledelet }) => {
    const { _id, name, message, photo, email } = review
    console.log(_id);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <button onClick={() => handledelet(_id)} className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <div className="font-bold">{name}</div>

                                    </div>
                                    <div className='mx-4'>
                                        <div className="font-bold">   <span className='ml-8'> $200</span></div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {message}
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Edit</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Fake;