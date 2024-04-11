import React from "react";
import Button from "./Button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
  console.log(currPage, totalPages);
  let paginationButtons = [];

  if (totalPages <= 5) {
    paginationButtons = [...Array(totalPages)].map((_, index) => index + 1);
  } else if (currPage < 5) {
    paginationButtons = [1, 2, 3, 4, 5, " ...", totalPages];
  } else if (currPage >= 4 && currPage <= totalPages - 4) {
    paginationButtons = [1, "... ", currPage - 1, currPage, currPage + 1, " ...", totalPages];
  } else {
    paginationButtons = [1, "... ", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  const handleClick = (pageIndex) => {
    if (pageIndex === " ...") {
      setCurrPage(totalPages);
    } else if (pageIndex === "... ") {
      setCurrPage(1);
    } else if (pageIndex >= 1 && pageIndex <= totalPages) {
      setCurrPage(pageIndex);
    }
  };

  return (
    <div className="flex gap-2 select-none">
      <button className={`${currPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-black"} text-xl`} onClick={() => handleClick(currPage - 1)}>
        <GrFormPrevious />
      </button>

      {paginationButtons.map((button, index) => {
        return (
          <Button key={index} onClick={() => handleClick(button)} variant={currPage === button ? "primary" : "primaryOutline"}>
            {button}
          </Button>
        );
      })}

      <button
        className={`${currPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-black"} text-xl`}
        onClick={() => handleClick(currPage + 1)}>
        <GrFormNext />
      </button>
    </div>
  );
};

export default Pagination;
