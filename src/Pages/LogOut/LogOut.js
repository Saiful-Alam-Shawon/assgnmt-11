import React, { useContext } from 'react';
import { AuthProvider } from '../../Contexts/AuthContext';

const LogOut = () => {

    const { LogOut } = useContext(AuthProvider);

    const handlelogOut = () => {

    }


    return (
        <div>

        </div>
    );
};

export default LogOut;