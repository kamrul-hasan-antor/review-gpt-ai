import React, { createContext, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [data, setData] = useState(false);

  return (
    <ReviewContext.Provider value={{ data, setData }}>
      {children}
    </ReviewContext.Provider>
  );
};
