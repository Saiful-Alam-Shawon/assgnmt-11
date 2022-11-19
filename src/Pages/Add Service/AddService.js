import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../../Contexts/AuthContext';



const AddService = () => {
    const { user } = useContext(AuthProvider);


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const price = `${form.price.value}`
        const email = user?.email;
        const message = `${form.description.value}`

        const addservice = {
            Customer: name,
            price,
            email,
            message
        }


        fetch('https://n-beta-coral.vercel.app/addedService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservice)
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
        <form onSubmit={handleAddService} className='mx-auto'>
            <div className='text-center mt-10' >
                <h2 className='text-4xl text-bold my-5'>Here You May Add New Service</h2>
                <div className='grid grid-cols-2 gap-4 '>
                    <div><input type="text" name='name' placeholder="Service Name" className="input input-bordered w-full max-w-xs" /></div>
                    <div><input type="text" name='price' placeholder="Service Price" className="input input-bordered w-full max-w-xs" /></div>
                    <div><input type="email" defaultValue={user?.email} placeholder="Service Price" className="input input-bordered w-full max-w-xs" readOnly /></div>

                </div>
                <div>
                    <div className="form-control w-4/5 mx-auto">
                        <label className="label">
                            <span className="label-text test-2xl">Describe Your Requirements</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" name='description' placeholder="Text Here"></textarea>



                    </div>
                    <button className="btn my-5">Add Service</button>
                    <ToastContainer

                    ></ToastContainer>
                </div>
            </div>
        </form>

    );
};

export default AddService;