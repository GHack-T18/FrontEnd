import React, { useState, useEffect } from "react";
import ColS from '../components/ColS';
import Phone from '../assets/Phone.png';

function SignUp() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='Create flex flex-row w-screen h-[100vh] bg-page-col '>
         <div className="flex flex-col space-y-10 sm:py-32 py-10 px-[15%]  items-start h-screen w-full bg-dash-col rounded-tr-[30px] rounded-br-[30px]">
          <h1 className="text-page-col text-6xl font-semibold w-full">Create Account</h1>
          <ColS />
        </div>
        <div className="h-screen w-[70%] flex  justify-end items-center">
            <div className=" absolute left-[57%]  top-[10%]">
                <img src={Phone}  alt="Phone Logo" className="" />
            </div>
        </div>
    </div>
  );
}

export default SignUp;
