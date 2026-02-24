import React from 'react'
import { useForm } from 'react-hook-form'
import "./CustomLogin.css"

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Form Data", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <input type="email" placeholder='Your Email' {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email format"}})}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
            {/* Password Field */}
            <input type="password" placeholder='Your Password' {...register("password", {required: "Password is required", minLength: {value: 6, message: "Password must be at least 6 characters"}})}/>
            {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm