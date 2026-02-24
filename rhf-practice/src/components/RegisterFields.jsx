import React from 'react'
import { useForm } from "react-hook-form"

function RegisterFields() {
   const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => console.log("Form Submitted");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", {required:true, maxLength: 20})} placeholder="First Name"/> {errors.firstName && <span>This field is required and max length is 20</span>}
        <input {...register("lastName", { pattern: /^[a-zA-Z\s]+$/ })} placeholder="Last Name" />
        <select {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
        </select>
        <input type="submit" />
    </form>
  )
}

export default RegisterFields
