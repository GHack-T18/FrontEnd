import React from "react";
import Col from '../components/Col';
import Kora from '../assets/Kora.png'

function LogIn() {
  return (
    <div className='Log flex flex-row w-screen h-[100vh] bg-page-col '>
        <div className="h-screen w-[70%] flex  justify-end items-center">
            <div className=" absolute right-[57%]  ">
                <img src={Kora} alt="Kora Logo" className="top-[10%]" />
            </div>
        </div>
        <div className="flex flex-col space-y-10 sm:py-32 py-10 px-[15%] items-start h-screen w-full bg-dash-col rounded-tl-[30px] rounded-bl-[30px]">
          <h1 className="text-page-col text-6xl font-semibold w-full">Login</h1>
          <h2 className="text-page-col text-xl font-normal  w-full">Welcome back ! Please login to your account .</h2>
          <Col />
        </div>
    </div>
  );
}

export default LogIn;
