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
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input 
				 type="email"
				 id="email" 
				 name="email" 
				 placeholder="maria@gmail.com"
				 onChange={onChange}
				 values={values[RegisterFormKeys.Email]}
				 />

				 <label htmlFor="username">Username:</label>
                <input 
				 type="username"
				 id="username" 
				 name="username" 
				 placeholder="maria"
				 onChange={onChange}
				 values={values[RegisterFormKeys.Username]}
				 />

                
                <label htmlFor="pass">Password:</label>
                <input 
				type="password" 
				name="password" 
				id="register-password"
				placeholder="type password"
				onChange={onChange}
				values={values[RegisterFormKeys.Password]}
				/>

                <label htmlFor="con-pass">Confirm Password:</label>
                <input 
				type="password" 
				name="confirm-password" 
				id="confirm-password"
				placeholder="type password"
				onChange={onChange}
				values={values[RegisterFormKeys.ConfirmPassword]}
				/>

                <input className="btn submit" type="submit"  value="Register"/>

                <p className="field">
                    <span>If you have already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
  );
}

