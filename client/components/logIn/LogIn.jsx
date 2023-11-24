import useForm from '../../hooks/useForm';

const  LogIn = () => {
    const {values, onChange, onSubmit} = useForm( {
        email:'',
        password: '',
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
                name="email"
                placeholder="maria@gmail.com">
                onChange={onChange}
                value={values.email}
                 </input>

                
                <label htmlFor="login-pass">Password:</label>
                <input
                 type="password" 
                 name="password"
                 id="login-password">
                onChange={onChange}
                value ={values.password}
                  </input>
                <input type="submit" className='btn submit' value="Login"></input>

                <p className="field">
                    <span>If you have already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
  );
}

export default LogIn;