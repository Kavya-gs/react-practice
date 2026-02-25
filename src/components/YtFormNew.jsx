import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import "../App.css";
import { useEffect } from 'react';


const YtFormNew = () => {
  const form = useForm({
    defaultValues: {
        username: "",
        email: "",
        channel: "",
        password: "",
        social: {
            twitter: "",
            facebook: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [{ number: ""}],
        age: 0,
        dob: new Date(),
    },
    mode: "onChange",
  });
  const { register, handleSubmit, formState, control, watch, getValues, setValue, reset, trigger } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitted, isSubmitSuccessful, submitCount } = formState;

  console.log(isSubmitSuccessful, "isSubmitSuccessful");
  console.log(submitCount, "submitCount");
  console.log(isSubmitted, "isSubmitted");

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  })
  const { name, ref, onChange, onBlur } = register("username");

//   const watchForm = watch();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const onError = (FieldErrors) => {
    console.log("Form Errors", FieldErrors);
  }


  const handleGetValues = () => {
    console.log("Current Form Values:", getValues(["username", "channel"]));
  };

  const handleSetValue = () => {
    setValue("username", "", {shouldValidate: true, shouldDirty: true, shouldTouch: true});
  }

  // Reset the form after successful submission
  useEffect(() => {
    if(isSubmitSuccessful){
        reset();
    }
  },[isSubmitSuccessful, reset]);
  
  useEffect(() => {
    const subscription = watch(value => {
        console.log("Watched Value", value);
    })
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <h1>YT Form</h1>
      {/* <h2>Watched Value: {JSON.stringify(watchForm)}</h2> */}
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
          return (fieldValue !== "black@example.com" || "This email is blacklisted");
        },
        emailAvailable: async(fieldValue) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
            const data = await response.json();
            return data.length === 0 || "Email is already registered";
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

        <div className='form-control'>
        <label htmlFor="twitter">Twitter</label>
        <input type="text" id="twitter" placeholder='Enter Your Twitter Handle' name="twitter" disabled={watch("channel") === ""} {...register("social.twitter")} />
        <p className='error'>{errors.social?.twitter?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" placeholder='Enter Your Facebook Handle' name="facebook" {...register("social.facebook")} />
        <p className='error'>{errors.social?.facebook?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="primary-phone">Primary Phone Number</label>
        <input type="text" id="primary-phone" placeholder='Enter Your Primary Phone Number' {...register("phoneNumbers.0")} />
        </div>

        <div className='form-control'>
        <label htmlFor="secondary-phone">Secondary Phone Number</label>
        <input type="text" id="secondary-phone" placeholder='Enter Your Secondary Phone Number' {...register("phoneNumbers.1")} />
        </div>

        <div>
            <label>List of Phone Numbers</label>
            {fields.map((field, index) => {
                return (
                    <div key={field.id}>
                        <input type="text" {...register(`phNumbers.${index}.number`)} />
                        {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>Remove Phone Number</button>
                        )}
                    </div>
                );
            })}
        </div>

        <button type='button' onClick={() => append({number: ""})}>Add Phone Number</button>

        <div className='form-control'>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder='Enter Your Age' {...register("age", {valueAsNumber: true}, { required: { value: true, message: "Age is required" } })} />
        <p className='error'>{errors.age?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" placeholder='Enter Your Date of Birth' {...register("dob", {valueAsDate: true}, { required: { value: true, message:"Date of Birth is required"}})} />
        <p className='error'>{errors.dob?.message}</p>
        </div>

        <button disabled={!isDirty || !isValid} type='submit'>Submit</button>
        <button type='button' onClick={() => reset()}>Reset</button>
        <button  type='button' onClick={handleGetValues}>Get Values</button>
        <button  type='button' onClick={() => setValue("username", "Updated User Name")}>Set Value</button>

        <button type='button' onClick={() => trigger()}>Trigger Email Validation</button>
      </form>
    </div>
  )
}

export default YtFormNew