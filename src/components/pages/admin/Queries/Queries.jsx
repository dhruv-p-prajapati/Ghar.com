import React, { useEffect, useState } from "react";
import { getAllQueries } from "../../../../utils/axiosGloableInstance";
import { toast } from "react-toastify";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const { data, error } = await getAllQueries();
      if (error) throw new Error("Failed to fetch Query");
      setQueries(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  if (queries.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mb-2">No Queries to Display</h2>
        <p className="text-gray-600">While there are no active inquiries, this is an opportunity to focus on other administrative tasks.</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-3xl font-semibold text-center mt-10">Queries</div>
      <div className="flex flex-col justify-center items-center gap-5 my-10">
        {queries.map((query) => {
          return (
            <div key={query.id} className="border border-gray-200 py-2 px-8 rounded-md w-[min(90vw,600px)] font-semibold">
              <div className="text-gray-800 text-base">
                Name - <span className="text-secondary font-normal">{query.name}</span>
              </div>
              <div className="text-gray-800 text-base">
                Email - <span className="text-secondary font-normal">{query.email}</span>
              </div>
              <div className="text-gray-800 text-base">
                Phone No. - <span className="text-secondary font-normal">{query.phNo}</span>
              </div>

              <div className="text-gray-800 text-base w-full">
                Query - <span className="text-secondary font-normal">{query.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Queries;
