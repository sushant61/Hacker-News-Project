import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, handlePage, page, nbPages } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        className="btn-prev"
        onClick={() => {
          handlePage("DEC");
        }}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        className="btn-next"
        onClick={() => {
          handlePage("INC");
        }}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
