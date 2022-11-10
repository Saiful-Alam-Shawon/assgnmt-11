import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthProvider } from '../../Contexts/AuthContext';




const Login = () => {
    const { login, google, user } = useContext(AuthProvider)
    // console.log(user.email);
    const navigation = useNavigate();


    const handleLoginButton = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user.email);
                // form.reset();
                navigation('/')
                form.reset();
            }).catch((error) => {
                console.error(error.message)

            });
        form.reset();
    }



    const handleGoogleSignIn = () => {
        google()
            .then((result) => {
                const user = result.user;
                // console.log(user);
            }).catch((error) => console.error(error));
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginButton} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/register'>
                                    <a href="# " className="label-text-alt link link-hover">Register</a>
                                </Link>
                            </label>
                        </div>
                        <div className="form-control m-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} className="btn btn-active btn-ghost"> <FaGoogle className='mr-2' /> Google SignIn</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;