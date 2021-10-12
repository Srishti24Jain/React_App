import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const Form = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    fname: "",lname: "",date: "",
    phone: "",employee: "",gender: "",
    dep: "",des: "",email: "",
    address: "",province: "",city: "",
    country: "",
  });
  const {
    fname,
    lname,
    phone,
    date,
    employee,
    gender,
    dep,
    des,
    email,
    address,
    province,
    city,
    country,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
    const resp = await axios.post("http://localhost:3003/users", {...user, id: Math.floor(Math.random()*100)});
    console.log(`Your data are here ==>`, resp);
    }catch(error){
        console.log(`Your error resp ==>`,error);
    }
    history.push("/");
  };

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
              <div className={`sm:flex items-center justify-center `}>
                <p
                  tabIndex="0"
                  className={`focus:outline-none text-5xl text-blue-500 `}
                >
                  EMPLOYEE FORM :
                </p>
                {/* <div>
                <button className={`focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded `}>
                <p className={`text-sm font-medium leading-none text-white`}>+Add Employee</p>
                </button>
            </div> */}
              </div>
            </div>
          </div>
          <form
            className={`w-full max-w-8xl h-full px-6 bg-white-100 `}
            onSubmit={(e) => onSubmit(e)}
          >
            <div className={`flex flex-wrap -mx-3 mb-6 `}>
              <div className={`w-full py-4 text-bold `}>
                <p className={`text-3xl`}>Basic Information</p>
              </div>
              <div className={`w-full md:w-full px-3 mb-6 md:mb-0 `}>
                <label
                  className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                  for="grid-first-name "
                >
                  First Name: *
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `}
                  required
                  id="grid-first-name "
                  name="fname"
                  type="text"
                  value={fname}
                onChange={onInputChange}
                  placeholder="First Name "
                />
                <div className={`w-full md:full `}>
                  <label
                    className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                    for="grid-last-name "
                  >
                    Last Name:
                  </label>
                  <input
                    className={`block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4`}
                    id="grid-last-name "
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    value={lname}
                    onChange={onInputChange}
                  />
                </div>
                <div className={"flex flex-wrap -mx-3 mb-6 "}>
                  <div className={`w-full px-3 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-phone"
                    >
                      Mobile Number: *
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      id="grid-phone"
                      name="phone"
                      type="text"
                      placeholder="Mobile Number "
                      value={phone}
                    onChange={onInputChange}
                      required
                    />
                  </div>
                </div>
                <div className={`flex flex-wrap -mx-3 mb-6 `}> 
                  <div className={`w-full md:w-2/3 px-3 mb-6 md:mb-0 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-city "
                    >
                      Employee ID: *
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      id="grid-city "
                      type="text "
                      name="employee"
                      placeholder="AT-4336 "
                      value={employee}
                    onChange={onInputChange}
                      Required
                    />
                  </div>
                  <div className={`w-full md:w-1/3 px-3 mb-6 md:mb-0`}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-state "
                    >
                      Gender:
                    </label>
                    <div className={`relative `}>
                      <select
                        className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                        name="gender"
                        id="grid-state "
                        value={gender}
                      onChange={onInputChange}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 `}
                      >
                        <svg
                          className={`fill-current h-4 w-4 `}
                          xmlns="http://www.w3.org/2000/svg "
                          viewBox="0 0 20 20 "
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z " />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`flex flex-wrap -mx-3 mb-6 `}>
                  <div className={`w-full px-3 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-state "
                    >
                      Start Date: *
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      id="grid-state "
                      type="date"
                      name="date"
                      placeholder="12-11-1999 "
                      value={date}
                    onChange={onInputChange}
                      Required
                    />
                  </div>
                </div> 
                <div className={`flex flex-wrap -mx-3 mb-2 `}>
                  <div className={`w-full md:w-2/3 px-3 mb-6 md:mb-0 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-state "
                    >
                      Department:
                    </label>
                    <div className={`relative `}>
                      <select
                        className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                        name="dep"
                        id="grid-state "
                        value={dep}
                      onChange={onInputChange}
                      >
                        <option>Design and Media</option>
                        <option>EEE</option>
                        <option>ME</option>
                      </select>
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 `}
                      >
                        <svg
                          className={`fill-current h-4 w-4 `}
                          xmlns="http://www.w3.org/2000/svg "
                          viewBox="0 0 20 20 "
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z " />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`w-full md:w-1/3 px-3 mb-6 md:mb-0 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-state "
                    >
                      Designation:
                    </label>
                    <div className={`relative `}>
                      <select
                        className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2`}
                        name="des"
                        id="grid-state "
                        value={des}
                      onChange={onInputChange}
                      >
                        <option>UI/UX Designer</option>
                        <option>Developer</option>
                        <option>Android Developer</option>
                      </select>
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 `}
                      >
                        <svg
                          className={`fill-current h-4 w-4 `}
                          xmlns="http://www.w3.org/2000/svg "
                          viewBox="0 0 20 20 "
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z " />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className={`flex flex-wrap -mx-3 mb-6 `}>
                  <div className={`w-full px-3 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-email "
                    >
                      Work Email: *
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      name="email"
                      id="grid-state"
                      type="email"
                      placeholder="seri@gmail.com "
                      value={email}
                    onChange={onInputChange}
                      Required
                    />
                  </div>
                </div> 
                 <div className={`flex flex-wrap -mx-3 mb-6 `}>
                  <div className={`w-full px-3 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-address "
                    >
                      Work Address: *
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      id="grid-address "
                      name="address"
                      type="text "
                      placeholder="Address "
                      value={address}
                    onChange={onInputChange}
                      Required
                    />
                  </div>
                </div> 
                 <div className={`flex flex-wrap -mx-3 mb-2 `}>
                  <div className={`w-full md:w-2/3 px-3 mb-6 md:mb-0 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-state "
                    >
                      Select/Provicence
                    </label>
                    <div className={`relative `}>
                      <select
                        className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                        name="province"
                        id=" grid-state "
                        value={province}
                      onChange={onInputChange}
                      >
                        <option>Delhi</option>
                        <option>Gurugram</option>
                        <option>Banglore</option>
                      </select>
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 `}
                      >
                        <svg
                          className={`fill-current h-4 w-4 `}
                          xmlns="http://www.w3.org/2000/svg "
                          viewBox="0 0 20 20 "
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z " />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`w-full md:w-1/3 px-3 mb-6 md:mb-0 `}>
                    <label
                      className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                      for="grid-city "
                    >
                      City:*
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2`}
                      id="grid-city "
                      type="text"
                      placeholder="Name the City "
                      name="city"
                      value={city}
                    onChange={onInputChange}
                      Required
                    />
                  </div>
                </div> 
                <div className={`w-full md:w-full mb-6 md:mb-0 `}>
                  <label
                    className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 `}
                    for="grid-state "
                  >
                    Country:
                  </label>
                  <div className={`relative `}>
                    <select
                      className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                      name="country"
                      id="grid-state "
                      value={country}
                    onChange={onInputChange}
                    >
                      <option>India</option>
                      <option>USA</option>
                      <option>Britain</option>
                    </select>
                    <div
                      className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 `}
                    >
                      <svg
                        className={`fill-current h-4 w-4 `}
                        xmlns="http://www.w3.org/2000/svg "
                        viewBox="0 0 20 20 "
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z " />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className={`text-xs text-red-500 text-left my-3 `}>
                  Required fields are marked with an asterisk{" "}
                  <abbr title="Required field ">*</abbr>
                </p>

                <div
                  className={`mt-5 text-right md:space-x-4 md:block flex flex-col `}
                >
                  <button
                    className={`mb-2 md:mb-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded `}
                    type="submit "
                    // onClick={() => {
                    //   history.push("/Employee_Information");
                    // }}
                  >
                    Save & Continue
                  </button>
                  <button
                    className={` mb-2 md:mb-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded `}
                    type="reset"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
