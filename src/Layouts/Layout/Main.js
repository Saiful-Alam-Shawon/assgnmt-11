import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Header1 from '../../Components/Header/Header1/Header1';

const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Header1></Header1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;