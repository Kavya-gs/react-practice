import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
import yupResolver from '@hookform/resolvers/yup'
import * as yup from 'yup'

const YtForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social : {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
    }
  });

  const { register, control, handleSubmit, formState, isDirty} = form;
  const { errors } = formState;

  const {fields, append, remove} = useFieldArray({
    name: "phoneNumbers",
    control,
  })

  const onSubmit = (data) => {
    console.log("YtForm Data", data)
  }
  
  const watchUsername = watch("username", "email");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <h2>Watched Value: {JSON.stringify(watchUsername)}</h2>
          <input type="text" id="username" {...register("username", { required: "Username is required" })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", { required: "Channel is required" })} />
          {errors.channel && <p>{errors.channel.message}</p>}
        </div>

        <div>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>

        <div>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YtForm