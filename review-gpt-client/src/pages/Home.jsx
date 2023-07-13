import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ReviewContext } from "../Contexts/ReviewProvider";

const Home = () => {
  const { setData } = useContext(ReviewContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.inputLink.value;
    setData(false);
    fetch("https://review-gpt-ai.onrender.com/review-generate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));

    navigate("/review");
  };

  return (
    <div className="pt-36 flex flex-col items-center">
      <img
        src="https://www.reviewgpt.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.477e97f1.png&w=384&q=75"
        alt=""
        className="w-[360px]"
      />

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-3/4 text-center py-10"
      >
        <input
          type="text"
          name="inputLink"
          placeholder="amazon product ;ink"
          className="w-3/4 p-2.5 border border-[#ccc] text-center rounded-md placeholder:text-sm md:placeholder:text-lg mb-2"
        />
        <p>Enter an Amazon Product Link and Press Enter Button</p>
      </form>
    </div>
  );
};

export default Home;
