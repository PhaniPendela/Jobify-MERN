import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numPages, curPage },
  } = useAllJobsContext();
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const createButton = ({ pageNumber, active }) => {
    return (
      <button
        className={`btn page-btn ${active && "active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };
  const renderPageButtons = (curPage) => {
    const pageBtns = [];
    pageBtns.push(createButton({ pageNumber: 1, active: curPage === 1 }));
    if (curPage > 3)
      pageBtns.push(
        <span className="page-btn dots" key={"dots-1"}>
          ...
        </span>
      );
    if (curPage !== 1 && curPage !== 2)
      pageBtns.push(createButton({ pageNumber: curPage - 1, active: false }));
    if (curPage !== 1 && curPage !== numPages)
      pageBtns.push(createButton({ pageNumber: curPage, active: true }));
    if (curPage !== numPages && curPage !== numPages - 1)
      pageBtns.push(createButton({ pageNumber: curPage + 1, active: false }));
    if (curPage < numPages - 2)
      pageBtns.push(
        <span className="page-btn dots" key={"dots-2"}>
          ...
        </span>
      );
    pageBtns.push(
      createButton({ pageNumber: numPages, active: curPage === numPages })
    );
    return pageBtns;
  };
  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let nextPage = curPage - 1;
          if (nextPage < 1) nextPage = numPages;
          handlePageChange(nextPage);
        }}
      >
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">{renderPageButtons(curPage)}</div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = curPage + 1;
          if (nextPage > numPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
