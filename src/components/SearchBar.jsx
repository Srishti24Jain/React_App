import React from "react";

function Searchbar(){
    return(
        <div className={`relative pb-4`}>
                  <div className={`absolute top-4 left-3 `}>
                    {" "}
                    <i
                      className={`fa fa-search text-gray-400 z-20 hover:text-gray-500 `}
                    ></i>{" "}
                  </div>{" "}
                  <input
                    type="text"
                    className={`h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none`}
                    placeholder="Search anything..."
                  />
                  <div className={`absolute top-2 right-2`}>
                    {" "}
                    <button
                      className={`h-10 w-20 text-white rounded-lg bg-indigo-600 hover:bg-red-600`}
                    >
                      Search
                    </button>{" "}
                  </div>
                </div>
    );
}
export default Searchbar;