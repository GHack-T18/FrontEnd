import React from "react";
import ColS from '../components/ColS';
import Phone from '../assets/Phone.png'

function SignUp() {
  return (
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
         <div className="flex flex-col space-y-10 sm:p-32 p-10 items-start h-screen w-full bg-dash-col rounded-tr-[30px] rounded-br-[30px]">
          <h1 className="text-page-col text-6xl font-semibold w-full">Create Account</h1>
          <ColS />
        </div>
        <div className="h-screen w-[90%] flex  justify-end items-center">
            <div className=" absolute right-[8%] top-16">
                <img src={Phone} alt="Kora Logo" className="" />
            </div>
        </div>
       
    </div>
  );
}

export default SignUp;
