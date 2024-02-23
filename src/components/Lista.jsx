import React from "react";
import Fb from '../assets/Fb.png';
import Instagrame from '../assets/Insta.png';
import Tel from '../assets/Tel.png';
import { ListFb } from './ListFb';
import { Insta } from './Insta';
import '../App.css';
import { Telegram } from './Telegram';


function Lista() {
  return (
    <div className="flex  flex-col w-full items-center justify-start space-y-3 h-screen ">
      <div className="flex flex-row space-x-3 items-center w-full">
        <div className="">
          <img src={Fb} alt="fb Logo" className="opacity-50" />
        </div>
        <h2 className="text-2xl font-medium text-page-col text-opacity-50">Facebook</h2>
      </div>

      {ListFb.map((item, index) => (
        <div key={index} className="relative flex flex-row items-center justify-start w-full space-x-5 rounded-[4px] px-2 hover:bg-gray-200 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={item.Photo} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-page-col">{item.Name}</h2>
            <p className="text-pinkii">{item.LastMessage}</p>
          </div>
          {item.Nb > 0 && ( // Conditionally render the div if Nb is greater than 0
            <div className="absolute right-2">
              <div className="bg-pinkii rounded-full w-6 h-6 flex items-center justify-center">{item.Nb}</div>
            </div>
          )}
        </div>
      ))}
       <div className="flex flex-row space-x-3 items-center w-full">
        <div className="">
          <img src={Instagrame} alt="insta Logo" className="opacity-50" />
        </div>
        <h2 className="text-2xl font-medium text-page-col text-opacity-50">Instagram</h2>
      </div>

      {Insta.map((item, index) => (
        <div key={index} className="relative flex flex-row items-center justify-start w-full space-x-5 rounded-[4px] px-2 hover:bg-gray-200 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={item.Photo} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-page-col">{item.Name}</h2>
            <p className="text-pinkii">{item.LastMessage}</p>
          </div>
          {item.Nb > 0 && ( // Conditionally render the div if Nb is greater than 0
            <div className="absolute right-2">
              <div className="bg-pinkii rounded-full w-6 h-6 flex items-center justify-center">{item.Nb}</div>
            </div>
          )}
        </div>
      ))}
       <div className="flex flex-row space-x-3 items-center w-full">
        <div className="">
          <img src={Tel} alt="telegram Logo" className="opacity-50" />
        </div>
        <h2 className="text-2xl font-medium text-page-col text-opacity-50">Telegram</h2>
      </div>

      {Telegram.map((item, index) => (
        <div key={index} className="relative flex flex-row items-center justify-start w-full space-x-5 pb-2 rounded-[4px] px-2 hover:bg-gray-200 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={item.Photo} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-page-col">{item.Name}</h2>
            <p className="text-pinkii">{item.LastMessage}</p>
          </div>
          {item.Nb > 0 && ( // Conditionally render the div if Nb is greater than 0
            <div className="absolute right-2">
              <div className="bg-pinkii rounded-full w-6 h-6 flex items-center justify-center">{item.Nb}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lista;
