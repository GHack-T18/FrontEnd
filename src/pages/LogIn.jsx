import React from "react";
import Col from '../components/Col';
import Kora from '../assets/Kora.png'

function LogIn() {
  return (
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
        <div className="h-screen w-[90%] flex  justify-end items-center">
            <div className=" absolute left-[8%] top-16">
                <img src={Kora} alt="Kora Logo" className="" />
            </div>
        </div>
        <div className="flex flex-col space-y-10 sm:p-32 p-10 items-start h-screen w-full bg-dash-col rounded-tl-[30px] rounded-bl-[30px]">
          <h1 className="text-page-col text-6xl font-semibold w-full">Login</h1>
          <h2 className="text-page-col text-xl font-normal  w-full">Welcome back ! Please login to your account .</h2>
          <Col />
        </div>
    </div>
  );
}

export default LogIn;
