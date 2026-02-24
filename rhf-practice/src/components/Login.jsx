import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    console.log(watch());
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("example", {required: true})}/>
        <br />
        <input {...register("exampleRequired", {required: true})} />
        <br />
        {errors.exampleRequired && <span style={{color: "red"}}>This file is Required</span>}
        <input type="submit" />
    </form>
  )
}

export default Login