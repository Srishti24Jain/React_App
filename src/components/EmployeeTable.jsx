import React , { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import Searchbar from "./SearchBar";

function Table() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };
  let history = useHistory();
  return (
    <div>
     <Navbar />
      <div className={`relative min-m-screen md:flex`}>
        <div
          className={`sidebar bg-white-800 border-2  text-blue-500 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div>
            <div
              className={`bg-gray-100 w-60 rounded overflow-hidden shadow-lg`}
            >
              <Sidebar />
            </div>
          </div>
        </div>

        <div
          className={`bg-gray-100 shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 h-full w-full`}
        >
          <div
            className={`px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg`}
          >
            <div className={`max-w-9xl h-full msm:px-6  `}>
              <div className={`flex justify-end items-center`}>
                <Searchbar />
              </div>

              <div className={`sm:flex items-center justify-between`}>
                <p
                  tabIndex="0"
                  className={`focus:outline-none text-base sm:text-lg text-blue-500 pt-6`}
                >
                  Employee{" "}
                </p>
                <div>
                  <button
                    className={`focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded `}
                    onClick={()=>{
                      history.push('/add-employee');
                    }}
                  >
                    <p
                      className={`text-sm font-medium leading-none text-white`}
                    >
                      +Add Employee
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto`}
          >
            <table className={`w-full whitespace-nowrap" id="myTable`}>
              <thead>
                <tr
                  tabIndex="0"
                  className={`focus:outline-none h-16 bg-gray-50 w-full text-sm leading-none text-gray-800 border-4`}
                >
                  <th className={`font-bold text-gray-700 text-left pl-4`}>
                    Employee Name
                  </th>
                  <th className={`font-bold text-gray-700 text-left pl-12 `}>Email</th>
                  <th className={`font-bold text-gray-700 text-left pl-12`}>Mobile</th>
                  <th className={`font-bold text-gray-700 text-left pl-20`}>Join Date</th>
                  <th className={`font-bold text-gray-700 text-gray-700text-left pl-20`}>Role</th>
                  <th className={`font-bold text-gray-700 text-left pl-20`}>Actions</th>
                </tr>
              </thead>
              <tbody className={`w-full`}>
              {users.map((user,index) => (
                <tr
                  tabIndex="0"
                  className={`focus:outline-none h-20 text-sm leading-none text-gray-500 bg-white hover:bg-gray-100 border-b border-t border-gray-100`}
               >
                 
                  <td className={`pl-4 cursor-pointer`}>
                    <div className={`flex items-center`}>
                      <div className={`pl-4`}>
                        <p className={`font-medium`}>{ user.fname+" " +user.lname}</p>
                      </div>
                    </div>
                  </td>
                  <td className={`pl-12`}>
                    <p className={`font-medium`}>{user.email}</p>
                  </td>
                  <td className={`pl-20`}>
                    <p className={`font-medium`}>{user.phone}</p>
                  </td>
                  <td className={`pl-20`}>
                    <p className={`font-medium`}>{user.date}</p>
                  </td>
                  <td className={`pl-20`}>
                    <p
                      className={`text-sm font-large leading-none text-gray-800`}
                    >{user.des}</p>
                  </td>
                  <td className={`pl-20`}>
                    <button
                      className={`text-sm font-large leading-none text-gray-800`}
                      onClick={()=>{
                        history.push(`/${user.id}`);
                      }}
                    >More...</button>
                  </td>
                </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
