import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCriteria, removeCriteria } from "../../redux/searchSlice";

const SearchCriteria = () => {
  const { selectedCriteria, availableCriteria } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleAddCriteria = (type, value) => {
    dispatch(addCriteria({ type, value }));
  };

  const handleRemoveCriteria = (type) => {
    dispatch(removeCriteria(type));
  };

  return (
    <>
    <h1 className="font-bold text-2xl text-left m-5">My Shipment</h1>
   
    <div className="p-6 bg-gray-50 ">
      
      <div className="mb-6">
        {/* <h2 className="text-xl font-semibold text-gray-800 mb-3">Selected Criteria</h2> */}
        <div className="flex flex-wrap gap-3">
          {selectedCriteria.map((criteria) => (
            <div
              key={criteria.type}
              className="flex items-center bg-teal-100 text-teal-800 border border-teal-400 rounded-full px-4 py-2"
            >
              <span className="mr-2 text-sm font-medium">
                {criteria.type}: {criteria.value}
              </span>
              <button
                onClick={() => handleRemoveCriteria(criteria.type)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

    
      <div>
        {/* <h2 className="text-xl font-semibold text-gray-800 mb-3">Available Criteria</h2> */}
        <div className="flex flex-wrap gap-3">
          {availableCriteria.map((criteria) => (
            <button
              key={criteria}
              onClick={() => handleAddCriteria(criteria, "New Value")}
              className="bg-blue-100 text-blue-800 border border-blue-400 rounded-md px-3 py-1 text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add {criteria}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SearchCriteria;