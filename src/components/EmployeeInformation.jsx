import React,{useState,useEffect} from "react";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import {useParams} from "react-router-dom";
import axios from "axios";

function Personal (){
    const [user, setUser] = useState({
        fname: "",lname: "",date: "",
        phone: "",employee: "",gender: "",
        dep: "",des: "",email: "",
        address: "",province: "",city: "",
        country: "",
      });

    const { id } = useParams();
    useEffect(() => {
      loadUser();
    });
    const loadUser = async () => {
      const res = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(res.data);
    };
    return(

        <div>
       
       <Navbar />
         <div className={`relative min-m-screen md:flex`}>
           <div className={`sidebar bg-white-800 border-2  text-blue-500 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out`}>

           <div>
                <div className={`bg-gray-100 w-60 rounded overflow-hidden shadow-lg`}>
                <Sidebar />
                </div>
            </div>
</div>

    <div className={`bg-gray-100 shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 h-full w-full`}>
                <div className={`px-4 md:px-10 py-4  md:py-2 bg-gray-100 rounded-tl-lg rounded-tr-lg`}>
                    <div className={`sm:flex items-center justify-between`}>
                        <p tabIndex="0" className={`focus:outline-none text-base sm:text-lg text-gray-500 pt-6`}>Basics Info</p>
                        <p tabIndex="0" className={`focus:outline-none text-base sm:text-lg text-gray-500 pt-6`}>Salary Details</p>
                        <p tabIndex="0" className={`focus:outline-none text-base sm:text-lg text-gray-500 pt-6`}>Personal Info</p>
                        <p tabIndex="0" className={`focus:outline-none text-base sm:text-lg text-gray-500 pt-6`}>Payment Info</p>
                    </div>
                </div>
                <div className={`bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 h-full overflow-y-auto`}>
                    <div className={`grid grid-rows-8 grid-flow-col gap-6`}>
                        <div className={`row-span-6 border-2`}>
                            {/* <button onClick="location.href='/form'"><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-80 mt-2`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg></button> */}
    
                            <div className={`flex flex-wrap justify-center`}>
    
                                <div className={`w-20 sm:w-20 px-2 pb-2`}>
                                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png " alt="... " className={`shadow-lg rounded-full max-w-full h-auto align-middle border-none `} />
                                </div>
                            </div>
                            <p className={`flex flex-wrap justify-center text-lg`}>
                                {user.fname} {user.lname}
                                </p>
                                <p className={`flex flex-wrap justify-center text-sm text-gray-500 py-2 pb-2`}>
                                {user.des}
                                </p>
    
                            <table className={`w-full whitespace-nowrap`}>
                               
    
                                <thead>
                                    <tr>
                                        <th>
    
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`w-full `}>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4 pr-4`}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Role</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.des}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Department</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.dep}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Manager</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>Jane Cooper</p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Reports</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>Hawinks</p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Start Date</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.date}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center`}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Work Address</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-6 pr-4 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.address}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0" className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Country</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.country}
                                            </p>
    
                                        </td>
                                    </tr>
    
                                </tbody>
    
                            </table>
    
    
    
                        </div>
                        {/* <!--  Second Grid Personal Information --> */}
                        <div className={`row-span-2 col-span-3 border-2 `}>
    
                            <table className={`w-full whitespace-nowrap`}>
    
                                {/* <button onClick="location.href='/form'"><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mt-2 `} viewBox="0 0 20 20" fill="currentColor">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg></button> */}
                                <p className={`flex flex-wrap justify-left pl-4 pb-2`}>Personal Information</p>
    
                                <thead>
                                    <tr>
                                        <th>
    
                                        </th>
                                    </tr>
                                </thead>
                              <tbody className={`w-full `}>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Father's Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>Brooklyn Simmons</p>
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Birthday</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>24th July,1999</p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Contact Email</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.email}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Mobile</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>
                                            {user.phone}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Address</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`ppl-6 pr-4 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>23,usha colony,sector-15,new delhi</p>
    
                                        </td>
                                    </tr>
    
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Third Grid Personal Information --> */}
                        <div className={`row-auto col-span-3 border-2 `}>
    
                            <table className={`w-full whitespace-nowrap`}>
                                {/* <button onClick="location.href='/form'"><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mt-2`} viewBox="0 0 20 20" fill="currentColor">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg></button> */}
                                <p className={`flex flex-wrap justify-left  pl-4 pb-2`}>Compensation</p>
                                <thead>
                                    <tr>
                                        <th>
    
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`w-full `}>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Employee Type</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>Salary/No Overtime</p>
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Wage</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>RS 200000 per year</p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>2nd Shareholder</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12`}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>No</p>
    
                                        </td>
    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Fourth Grid Personal Information --> */}
                        <div className={`row-auto col-span-3 border-2 `}>
                            <table className={`w-full whitespace-nowrap`}>
                                {/* <button onClick="location.href='/form'"><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mt-2`} viewBox="0 0 20 20" fill="currentColor">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg></button> */}
    
                                <p className={`flex flex-wrap justify-left pt-4 pl-4 pb-2`}>Payment Information</p>
                                <thead>
                                    <tr>
                                        <th>
    
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`w-full `}>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Bank Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>City Bank</p>
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>Bank Account No.</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>2419992000</p>
    
                                        </td>
                                    </tr>
                                    <tr tabIndex="0 " className={`focus:outline-none h-10 text-sm leading-none text-gray-500 bg-white `}>
                                        <td className={`pl-4  `}>
                                            <div className={`flex items-center `}>
                                                <div className={`pl-4 `}>
                                                    <p className={`font-medium `}>IFSC Code</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`pl-12 `}>
                                            <p className={`text-sm font-medium leading-none text-gray-800 `}>city5678</p>
    
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

    );
}
export default Personal;