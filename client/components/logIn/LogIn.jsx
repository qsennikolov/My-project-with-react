import useForm from '../../hooks/useForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function LogIn ({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
        [LoginFormKeys.Email]:"",
        [LoginFormKeys.Password]: "",
    });


  return (
     <section id= "login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name={LoginFormKeys.Email}
                placeholder="maria@gmail.com"
                onChange={onChange}
                value={values[LoginFormKeys.Email]}
                />

                
                <label htmlFor="login-pass">Password:</label>
                <input
                 type="password" 
                 name={LoginFormKeys.Password}
                 id="login-password"
                onChange={onChange}
                value={values[LoginFormKeys.Password]}
                />
                <input type="submit" className='btn submit' value="Login"></input>

                <p className="field">
                    <span>If you have already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
  );
}

