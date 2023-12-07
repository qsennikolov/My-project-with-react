import '../register/register.css'
import { useContext, useMemo } from "react";
import AuthContext from "../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
	Email: 'email',
	Username: 'username',
	Password: 'password',
	ConfirmPassword: 'confirm-password'
};

export default function Register() {
	const { registerSubmitHandler } = useContext(AuthContext)

	const initialValues = useMemo(() => ({
		[RegisterFormKeys.Email]: '',
		[RegisterFormKeys.Username]: '',
		[RegisterFormKeys.Password]: '',
		[RegisterFormKeys.ConfirmPassword]: '',
	}), []);

	const {values, onChange, onSubmit} = useForm(registerSubmitHandler, initialValues)

	
  return (
    <section id= "register-page" className="content auth">
        <form id="register" onSubmit={onSubmit}>
            <div className="container_register">
                <div className="brand-logo"></div>
                <h1>Sing Up</h1>
			<div className='register_email'>
                <label htmlFor="email">Email:</label>
                <input 
				 type="email"
				 id="email" 
				 name="email" 
				 placeholder="maria@gmail.com"
				 onChange={onChange}
				 values={values[RegisterFormKeys.Email]}
				 />
			</div>

			<div className='register_username'>
				 <label htmlFor="username">Username:</label>
                <input 
				 type="username"
				 id="username" 
				 name="username" 
				 placeholder="maria"
				 onChange={onChange}
				 values={values[RegisterFormKeys.Username]}
				 />
			</div>
                
			<div className='register_password'>
                <label htmlFor="pass">Password:</label>
                <input 
				type="password" 
				name="password" 
				id="register-password"
				placeholder="type password"
				onChange={onChange}
				values={values[RegisterFormKeys.Password]}
				/>
			</div>

			<div className='register_copassword'>
                <label htmlFor="con-pass">Co-Password:</label>
                <input 
				type="password" 
				name="confirm-password" 
				id="confirm-password"
				placeholder="type password"
				onChange={onChange}
				values={values[RegisterFormKeys.ConfirmPassword]}
				/>
			</div>


			
                <input className="register_btn" type="submit"  value="Register"/>

                <p className="field_register">
                    <span>If you have already profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
  );
}

