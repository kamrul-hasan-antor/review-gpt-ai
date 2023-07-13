import React, { useContext } from "react";
import { ReviewContext } from "../Contexts/ReviewProvider";

const Review = () => {
  const { data } = useContext(ReviewContext);
  

  const {
    ProductName,
    ProductURL,
    Recommendation,
    ReviewBody,
    ProductPrice,
    ProductRating,
  } = data;
  return (
    <div>
      {!data ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="mb-3">
              Data is fetching. This may take upto 30 seconds.
            </p>
            <img
              src="https://www.reviewgpt.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floading-box.e0cad4d3.gif&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-32 md:py-0 md:h-screen">
          <div className="text-center px-6 md:w-2/3">
            <a
              className="text-[#007185] font-semibold text-lg underline"
              href={ProductURL}
              target="_blank"
            >
              {ProductName}
            </a>
            <p className="font-semibold text-xl py-2">{Recommendation}</p>
            <p>{ReviewBody}</p>
            <div className="flex justify-between mt-2">
              <p>Price: {ProductPrice}</p>
              <p>Rating: {ProductRating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
