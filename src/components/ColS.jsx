import React from "react";
import { Link } from 'react-router-dom';


function ColS({Name, mail, mdp }) {
  return (
    <div className='flex flex-col h-[100vh] w-full'>
      <div className="flex flex-col items-start space-y-2 w-full">
      <h2 className="font-medium text-xl">Company Name</h2>
        <div className="w-full">
          <input
            className="outline-none border-2 border-pinkii text-item-col sm:h-12 h-8  w-full rounded-md pl-3"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entreprise"
          />
        </div>
        <h2 className="font-medium text-xl">Email</h2>
        <div className="w-full">
          <input
            className="outline-none border-2 border-pinkii text-item-col sm:h-12 h-8  w-full rounded-md pl-3"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="li_debbih@esi.dz"
          />
        </div>
        <h2 className="font-medium text-xl">Your password</h2>
        <div className="w-full">
          <input
            className="outline-none border-2 border-pinkii text-item-col sm:h-12 h-8  w-full rounded-md pl-3"
            value={mdp}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=". . . . . . . . ."
          />
        </div>
        <div className="  w-full grid justify-items-end ">
          <h2 className="font-medium text-xl text-pinkii underline cursor-pointer">Forgot password?</h2>
        </div>
        <button
        className='justify-center items-center w-full h-12 text-xl  sm:h-16 bg-pinkii text-dash-col rounded-[4px] '
      >
          Login
        </button>
        <div className="flex flex-row justify-center items-center font-medium text-xl space-x-4  w-full">
            <h2>Already have an account?   </h2>
            <Link to="/LogIn">
            <h2 className="text-pinkii  cursor-pointer">Log In</h2></Link>
        </div>
      </div>
    </div>
  );
}

export default ColS;
