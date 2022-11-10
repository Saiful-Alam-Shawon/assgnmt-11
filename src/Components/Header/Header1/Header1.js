import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/AuthContext';

const Header1 = () => {

    const { logOut, user } = useContext(AuthProvider);
    const userEmail = user?.email;
    console.log(userEmail);

    // {
    //     isuserEmail
    //         && <div className="navbar-center hidden lg:flex">
    //             <ul className="menu menu-horizontal p-0">

    //                 <li><a onClick={handleLogOut} href='# '>Log Out</a></li>
    //                 <Link to='/service6'>
    //                     <li><a href='# '>All Services</a></li>
    //                 </Link>
    //                 <Link to='/blog'>
    //                     <li><a href='# '>Blog</a></li>
    //                 </Link>
    //                 <Link to='/addservice'>
    //                     <li><a href='# '>Add Service</a></li>
    //                 </Link>
    //                 <Link to='/details'>
    //                     <li><a href='# '>Service Details</a></li>
    //                 </Link>
    //                 <Link to='/register'>
    //                     <li><a href='# '>Register</a></li>
    //                 </Link>
    //                 <Link to='/reviews'>
    //                     <li><a href='# '>My Reviews</a></li>
    //                 </Link>
    //                 <Link to='/login'>
    //                     <li> <a href='# '>Log In</a></li>
    //                 </Link>
    //             </ul>
    //         </div>
    //     ||
    //   {/* <div className="navbar-center hidden lg:flex">
    //                     <ul className="menu menu-horizontal p-0">

    //                         <li><a onClick={handleLogOut} href='# '>Log Out</a></li>
    //                         <Link to='/service6'>
    //                             <li><a href='# '>All Services</a></li>
    //                         </Link>
    //                         <Link to='/blog'>
    //                             <li><a href='# '>Blog</a></li>
    //                         </Link>
    //                         <Link to='/addservice'>
    //                             <li><a href='# '>Add Service</a></li>
    //                         </Link>
    //                         <Link to='/details'>
    //                             <li><a href='# '>Service Details</a></li>
    //                         </Link>
    //                         <Link to='/register'>
    //                             <li><a href='# '>Register</a></li>
    //                         </Link>
    //                         <Link to='/reviews'>
    //                             <li><a href='# '>My Reviews</a></li>
    //                         </Link>
    //                         <Link to='/login'>
    //                             <li> <a href='# '>Log In</a></li>
    //                         </Link>
    //                     </ul>
    //                 </div> */}

    // }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }


    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='# '>Item 1</a></li>
                        <li tabIndex={0}>
                            <a href='# ' className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href='# '>Submenu 1</a></li>
                                <li><a href='# '>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a href='# '>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/'>
                    <button className="btn btn-ghost normal-case text-xl">P-WORPLD</button>
                    {/* <a href='#' className="btn btn-ghost normal-case text-xl"></a> */}
                </Link>
            </div>


            {/* Genuine IS here */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {
                        user?.email
                        && <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">

                                <li className='mx-2' onClick={handleLogOut}>  Log Out</li>


                                <Link to='/addservice'>
                                    <li className='mx-2'>Add Service</li>
                                </Link>


                                <Link to='/reviews'>
                                    <li className='mx-2'>My Reviews</li>
                                </Link>

                            </ul>
                        </div>

                    }

                    {/* <li><a onClick={handleLogOut} href='# '>Log Out</a></li> */}
                    <Link to='/service6'>
                        <li className='mx-2'>All Services</li>
                    </Link>
                    <Link to='/blog'>
                        <li className='mx-2'>Blog</li>
                    </Link>
                    {/* <Link to='/addservice'>
                            <li><a href='# '>Add Service</a></li>
                        </Link> */}
                    {/* <Link to='/details'>
                        <li><a href='# '>Service Details</a></li>
                    </Link> */}
                    <Link to='/register'>
                        <li className='mx-2'>Register</li>
                    </Link>
                    {/* <Link to='/reviews'>
                            <li><a href='# '>My Reviews</a></li>
                        </Link> */}
                    <Link to='/login'>
                        <li className='mx-2'> Log In</li>
                    </Link>
                </ul>
            </div >
            {/* Genuine finish */}




        </div >

    );
};

export default Header1;