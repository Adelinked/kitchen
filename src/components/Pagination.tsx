import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
const NavButton = ({
  page,
  currentPage,
  setCurrentPage,
}: {
  page: number;
  currentPage: number;
  setCurrentPage: (number: number) => void;
}) => {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`select-none rounded-[4px] border-[1px] w-6 h-6 mr-1 md:w-9 md:h-9  md:mr-3 text-xs md:text-base ${
        page === currentPage
          ? "bg-primary-400 text-white border-primary-600 "
          : "border-gray-500  hover:bg-primary-400 hover:text-white hover:border-primary-600"
      }`}
    >
      {page + 1}
    </button>
  );
};

const Dots = () => {
  return (
    <span className=" mr-1 md:mr-3 text-xs md:text-2xl">
      <BsThreeDots />
    </span>
  );
};

export const Pagination = ({
  numberElements,
  elementsPerPage,
  currentPage,
  setCurrentPage,
  toViewRef,
}: {
  numberElements: number;
  elementsPerPage: number;
  currentPage: number;
  setCurrentPage: (number: number) => void;
  toViewRef?: React.RefObject<HTMLDivElement>;
}) => {
  const numPages = Math.ceil(numberElements / elementsPerPage);
  //const pageNumbers = Array.from({ length: numPages }, (_, index) => index + 1);

  const canShowDotsBefore = currentPage > 2 && numPages - currentPage > 0;
  const canShowDotsAfter = currentPage < numPages - 3;
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (toViewRef && toViewRef.current && !isInitialRender.current) {
      toViewRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, [currentPage]);

  return (
    <div className="flex items-center pb-6 pt-8">
      {numPages > 1 ? (
        <>
          <span
            onClick={() =>
              setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)
            }
            className={`${
              currentPage === 0
                ? "text-gray-300 border-gray-300  dark:text-gray-700 dark:border-gray-700"
                : "cursor-pointer border-gray-500 hover:bg-primary-400 hover:text-white hover:border-primary-600"
            }  rounded-[4px] border-[1px] w-6 h-6 mr-1 md:w-9 md:h-9 md:mr-3 flex items-center justify-center`}
          >
            <IoIosArrowBack />
          </span>
          <div className="flex items-center min-w-[180px] md:min-w-[320px] justify-evenly">
            <NavButton
              page={0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />

            {canShowDotsBefore ? <Dots /> : null}

            {currentPage > 1 ? (
              <NavButton
                page={currentPage - 1}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : null}

            {currentPage > 0 && currentPage < numPages - 1 && (
              <NavButton
                page={currentPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}

            {currentPage < numPages - 2 ? (
              <NavButton
                page={currentPage + 1}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : null}

            {canShowDotsAfter ? <Dots /> : null}

            {numPages > 1 ? (
              <NavButton
                page={numPages - 1}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : null}
          </div>
          <span
            onClick={() =>
              setCurrentPage(
                currentPage < numPages - 1 ? currentPage + 1 : numPages - 1
              )
            }
            className={`${
              currentPage === numPages - 1
                ? "text-gray-300 border-gray-300 dark:text-gray-700 dark:border-gray-700"
                : "cursor-pointer border-gray-500 hover:bg-primary-400 hover:text-white hover:border-primary-600"
            }  rounded-[4px] border-[1px] w-6 h-6 mr-1 md:w-9 md:h-9 md:mr-3 flex items-center justify-center`}
          >
            <IoIosArrowForward />
          </span>
          <span className="ml-1 lg:ml-3 select-none text-xs md:text-base  whitespace-nowrap">
            {currentPage < numPages - 1
              ? (currentPage + 1) * elementsPerPage
              : numberElements}{" "}
            / {numberElements}
          </span>
        </>
      ) : null}
    </div>
  );
};
