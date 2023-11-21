import React from "react";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const Ratings = ({ ratings }) => {
  return (
    <>
      {ratings >= 1 ? (
        <span className="text-[#EDBB0E]">
          <ImStarFull />
        </span>
      ) : ratings >= 0.5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarHalf />
        </span>
      ) : (
        <span className="text-[#EDBB0E]">
          <ImStarEmpty />
        </span>
      )}
      {ratings >= 2 ? (
        <span className="text-[#EDBB0E]">
          <ImStarFull />
        </span>
      ) : ratings >= 1.5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarHalf />
        </span>
      ) : (
        <span className="text-[#EDBB0E]">
          <ImStarEmpty />
        </span>
      )}
      {ratings >= 3 ? (
        <span className="text-[#EDBB0E]">
          <ImStarFull />
        </span>
      ) : ratings >= 2.5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarHalf />
        </span>
      ) : (
        <span className="text-[#EDBB0E]">
          <ImStarEmpty />
        </span>
      )}
      {ratings >= 4 ? (
        <span className="text-[#EDBB0E]">
          <ImStarFull />
        </span>
      ) : ratings >= 3.5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarHalf />
        </span>
      ) : (
        <span className="text-[#EDBB0E]">
          <ImStarEmpty />
        </span>
      )}
      {ratings >= 5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarFull />
        </span>
      ) : ratings >= 4.5 ? (
        <span className="text-[#EDBB0E]">
          <ImStarHalf />
        </span>
      ) : (
        <span className="text-[#EDBB0E]">
          <ImStarEmpty />
        </span>
      )}
    </>
  );
};

export default Ratings;
