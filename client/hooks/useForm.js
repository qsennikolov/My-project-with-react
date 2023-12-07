import { useEffect, useState } from "react"


export default function useForm(submitHandler,initialValues) {
    const[values, setValues] = useState(initialValues);
    
    useEffect(() => {
      setValues(initialValues);
    }, [initialValues]);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit= (e) => {
        e.preventDefault();

        submitHandler(values);
        
        // console.log(values);
        
    };
    // if(values.email.length == 0){
    //    return alert('Email field must not be empty!')
    // }else if (values.username.length == 0){
    //    return alert("Username field must not be empty!");
    // }else if(values.password.length < 3){
    //     return alert("Password field must be at least 3 symbols!")
    // }
    
    return {
        values,
        onChange,
        onSubmit,
    }
}