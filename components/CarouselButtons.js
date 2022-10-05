import React from "react";

export const PrevButton = ({ disabled, onClick }) => (
    <button
      className="hover:scale-105 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 mr-4 transition-all ease-in-out duration-300"
      onClick={onClick}
      disabled={disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Prev</span>
    </button>
  );
  
  export const NextButton = ({ disabled, onClick }) => (
    <button
      className="hover:scale-105 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
      onClick={onClick}
      disabled={disabled}
    >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    <span className="sr-only">Next</span>
    </button>
  );