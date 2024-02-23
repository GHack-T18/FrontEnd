import React, { useState, useEffect } from "react";
import ColS from '../components/ColS';
import Phone from '../assets/Phone.png';
import { Link } from 'react-router-dom';


function Home() {
 

  return (
    <div className='home flex flex-col w-screen h-[100vh] bg-page-col '>
        <div className="NavBar w_full p-5">
            <h1 className="text-dash-col">Logo</h1>
            </div>
        <div className="flex flex-row  ">
            
                <div className="flex flex-col space-y-32 sm:p-32 p-10 items-start w-3/5">
                    <div className="flex flex-col space-y-3">
                <h1 className="text-dash-col text-7xl font-semibold w-full">Deliver with </h1>
                <h1 className="text-pinkii text-7xl font-semibold w-full">Confidence </h1>
                <h2 className="text-dash-col text-2xl font-medium w-full "> Your Trusted Courier Service Awaits.</h2>
</div>
                <div className="flex flex-row space-x-8  ">
                <Link to="/SignUp">
                <button
        className='justify-center items-center w-36 h-9  bg-pinkii text-page-col rounded-[4px] '
      >
          Sign Up
        </button>
        </Link>
        <Link to="/LogIn">
                <button
        className='justify-center  items-center w-36 h-9  bg-page-col text-pinkii rounded-[4px] '
      >
          Log In
        </button>
        </Link>
                </div>

                </div>
            
            <div className="w-full flex justify-center items-center ">
            <div>
                <img src={Phone}  alt="Phone Logo" className="" />
            </div>
            </div>

        </div>
    </div>
  );
}

export default Home;
