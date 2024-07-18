import React, { useState } from 'react'

const Login = () => {

    const[loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event){
        const {name, value } = event.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(loginFormData);
    }

    return (
        <div className='login-container'>

            <h1>Sign in to your account</h1>

            <form onSubmit={submitHandler} className='login-form'>
                <input 
                    type="text" 
                    name="email"
                    onChange={changeHandler}
                    placeholder='Email address'
                    value={loginFormData.email}
                />
                <input 
                    type="password" 
                    name="password"
                    onChange={changeHandler}
                    placeholder='Password'
                    value={loginFormData.password}
                />

                <button>Log in</button>

            </form>

        </div>
    )
}

export default Login
