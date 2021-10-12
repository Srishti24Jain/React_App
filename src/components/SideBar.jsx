import React from "react";

function Sidebar(){
    return(
        <div>
        <div className={`text-center p-4 border-b`}>
        <a
          href="/personal"
          className={`text-blue-500 flex items-center space-x-4 px-4`}
        >
          <img
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png "
            alt="... "
            className={`shadow-lg rounded-full max-w-10 h-12 m-1  align-middle border-none `}
          />

          <span className={`text-2xl font-extrabold`}>Antler</span>
        </a>
        <div className={`mt-5`}>
          <a
            href
            className={`border rounded-full py-2 px-4 text-xs font-semibold text-gray-700`}
          >
            Manage your Account
          </a>
        </div>
      </div>
      <div className={`border-b`}>
        <a href className={`px-4 py-2 hover:bg-gray-500 flex`}>
          <div className={`text-gray-800`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div className={`pl-3`}>
            <p
              className={`text-sm font-bold text-gray-800 leading-none`}
            >
              Dashboard
            </p>
          </div>
        </a>
        <a href="/" className={`px-4 py-2 hover:bg-gray-500 flex`}>
          <div className={`text-gray-800`}>
            <svg
              fill="none"
              stroke="blue"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className={`w-5 h-5`}
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className={`pl-3`}>
            <p
              className={`text-sm font-bold text-gray-800 leading-none `}
            >
              Employee
            </p>
          </div>
        </a>
        <div className={`pt-96 pb-4 flex`}>
          <button
            className={`bg-blue-500 w-2/3 h-10 hover:bg-blue-700 text-sm font-medium text-white leading-none`}
          >
            Log Out
          </button>
        </div>
        </div>
        </div>
          

    );
}
export default Sidebar;