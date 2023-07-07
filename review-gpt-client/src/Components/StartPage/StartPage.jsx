import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center h-screen w-screen">
      <div>
        <img
          src="https://www.reviewgpt.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.477e97f1.png&w=384&q=75"
          alt=""
        />
        <div className="text-center text-sm text-cyan-800">
          <p>Welcome to ReviewGPT</p>
          <p>Login with your reviewGPT account to continue</p>
        </div>

        <div className="flex justify-center mt-5">
          <Link to="/login">
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:border-none font-bold rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:border-none font-bold rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartPage;
