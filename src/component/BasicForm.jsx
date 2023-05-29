import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schema";



const onSubmit= async(values,actions)=>{
    console.log("form submitted"); 
    console.log(values);
    console.log(actions)
    await new Promise((resolve)=>setTimeout(resolve,1000))
    actions.resetForm()
}

const BasicForm = () => {
  const {values,errors, touched, handleBlur,isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: " ",
      age:"",
      password:"",
      confirmPassword:""
    },
    validationSchema:basicSchema,
    onSubmit,
  });
//   console.log(values,"Hello");
//   console.log(errors);
  return (
    <form className="max-w-sm my-0 mx-auto" onSubmit={handleSubmit} autoComplete="off ">
      <label htmlFor="Email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter Your Email"
        className={errors.email && touched.email?"input-error":""}
      />
      {errors.email&& touched.email&&<p className="text-[#fc8181] text-xs text-left mt-1">{errors.email}</p>}
      <label htmlFor="Age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter Your Age"
        className={errors.age && touched.age?"input-error":""}
      />
      {errors.age&& touched.age&&<p className="text-[#fc8181] text-xs text-left mt-1">{errors.age}</p>}
      <label htmlFor="Password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter Password"
        className={errors.password && touched.password?"input-error":""}
      />
      {errors.password&& touched.password&&<p className="text-[#fc8181] text-xs text-left mt-1">{errors.password}</p>}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className={errors.confirmPassword && touched.confirmPassword?"input-error":""}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="text-[#fc8181] text-xs text-left mt-1">{errors.confirmPassword}</p>}
      <button disabled={isSubmitting} type="submit" className="block capitalize mt-4 py-3 px-9 bg-[#4299e1] font-bold border border-[#4299e1] text-[#1a202c] hover:text-[#4299e1] hover:bg-transparent w-full cursor-pointer rounded">submit</button>
 
    </form>
  );
};

export default BasicForm;
