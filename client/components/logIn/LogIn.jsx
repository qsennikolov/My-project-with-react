import { useContext, useMemo } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../contexts/authContext';
import './login.style.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login () {
    const { loginSubmitHandler } = useContext(AuthContext)

    const initialValues = useMemo(() => ({
        [loginSubmitHandler.Email]: '',
        [loginSubmitHandler.Password]: '',
    }), []);

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, initialValues);
    
  return (
     <section id= "login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>
            <div className="container-login">
                <div className="brand-logo"></div>
                <h1>Login</h1>

            <div className='email-line'>
                <label className='email'
                 htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name={LoginFormKeys.Email}
                placeholder="enter e-mail "
                onChange={onChange}
                values={values[LoginFormKeys.Email]}
                />
            </div>
                
            <div className='password-line'>
                <label className='password'
                 htmlFor="login-pass">Password:</label>
                <input
                 type="password"
                 placeholder='enter password'
                 name={LoginFormKeys.Password}
                 id="login-password"
                onChange={onChange}
                values={values[LoginFormKeys.Password]}
                />
            </div>

                <input type="submit" className='btn submit' value="Login"></input>

            </div>
        </form>
    </section>
  );
}

