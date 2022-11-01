import React from "react";

export const PrevButton = ({ disabled, onClick }) => (
    <button
      className="bg-[gray] md:bg-transparent border rounded md:border-none absolute md:relative z-10 left-4 flex justify-center hover:scale-105 opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
      onClick={onClick}
      disabled={disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-[4em]" fill="none" viewBox="0 0 29.6 83.34" stroke="black" strokeWidth={3}>
      <polyline points="28.34 .82 1.79 41.67 28.34 82.52"/>
      </svg>
      <span className="sr-only">Prev</span>
    </button>
  );
  
  export const NextButton = ({ disabled, onClick }) => (
    <button
      className="bg-[gray] md:bg-transparent border rounded md:border-none absolute md:relative z-1 right-4 flex justify-center hover:scale-105 opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
      onClick={onClick}
      disabled={disabled}
    >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-[4em]" fill="none" viewBox="0 0 29.6 83.34" stroke="black" strokeWidth={3}>
    <polyline points="1.26 .82 27.81 41.67 1.26 82.52"/>
    </svg>
    <span className="sr-only">Next</span>
    </button>
  );