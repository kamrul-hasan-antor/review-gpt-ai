import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signin = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <section className="container mx-auto max-w-sm flex flex-col justify-center h-screen">
      <div className="bg-slate-50 p-3 rounded-lg">
        <h1 className="text-center text-2xl">Welcome Back</h1>
        <form className="mt-2" onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="text" className="block font-medium mb-2 text-gray-500">
              Email
            </label>
            <input
              className="border p-2 w-full rounded outline-none focus:border-cyan-300"
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is Required" })}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>}
            {firebaseError && <p className="text-red-600 text-xs mt-1">{firebaseError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2 text-gray-500">
              Password
            </label>
            <input
              className="border p-2 w-full rounded outline-none focus:border-cyan-300"
              type="password"
              placeholder="Enter your Password"
              {...register("password", { required: "Password is Required" })}
            />
            {errors.password && (
              <p className="text-red-600 text-xs mt-1">{errors.password?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded duration-300"
          >
            Login
          </button>
        </form>

        <div className="py-2 text-center mt-3">
          <p className="text-slate-500"> You don&apos;t have an Account?</p>
          <Link to="/signup" className="border-b text-cyan-800">
            Signup Now
          </Link>
        </div>

        <div className="border border-cyan-500 hover:bg-gray-500 px-4 py-3 uppercase mt-5 text-cyan-500 font-bold hover:text-white hover:border-white cursor-pointer rounded-md text-center duration-300">
          <h2>Continue with Google</h2>
        </div>
      </div>
    </section>
  );
};

export default Signin;
