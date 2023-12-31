import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'

import * as authService from '../services/authService'

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) =>  {
    const navigate = useNavigate()
	const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

	const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate("/home");
    }   
	
    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password, values.username)
       
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate("/home");
    }

    const logoutHandler = () =>{
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/home');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;