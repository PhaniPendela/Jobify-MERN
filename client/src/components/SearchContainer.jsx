import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobType, jobStatus } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search Form</h5>
        <div className="form-center">
          <FormRow
            type={"search"}
            name={"search"}
            defaultValue={search}
            onChange={debounce((event) => {
              submit(event);
            })}
          />
          <FormRowSelect
            labelText={"job status"}
            name={"jobStatus"}
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText={"job type"}
            name={"jobType"}
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <FormRowSelect
            name={"sort"}
            defaultValue={JOB_SORT_BY.NEWEST_FIRST}
            list={Object.values(JOB_SORT_BY)}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <Link to={"/dashboard/all-jobs"} className="btn form-btn delete-btn">
            {" "}
            Reset search values{" "}
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
