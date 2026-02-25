import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form'
import "../App.css";


const YtForm = () => {
  const form = useForm({
    defaultValues: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return {
        username: data.username,
        email: data.email,
        channel: data.name,
      }
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  }

  return (
    <div>
      <h1>YT Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name={name} placeholder='Enter Username' {...register("username", { required: "Username is required" })} />
            <p className='error'>{errors.username?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter Your Email' name="email" {...register("email", { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" }, validate: { notAdmin: (fieldValue) => {
          return fieldValue !== "admin@example.com" || "Enter a different email address";
        }, notBlack: (fieldValue) => {
          return fieldValue !== "black@example.com" || "This email is blacklisted";
        } } })} />
        <p className='error'>{errors.email?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" placeholder='Enter Your Channel Name' name="channel" {...register("channel")} />
        <p className='error'>{errors.channel?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter Your Password' name="password" {...register("password")} />
        <p className='error'>{errors.password?.message}</p>
        </div>

        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default YtForm