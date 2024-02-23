import React from "react";
import Sidebar from '../components/SideBarrrr';
import FilterC from '../components/FilterC';
import Lista from '../components/Lista';
import My from '../assets/My.png';
import Cat from '../assets/Cat.png';
import BigCat from '../assets/BigCat.png';
import { PopUp } from '../components/PopUp';


import { LittleSideBar } from "../components/LittleSideBar";
import '../App.css';


function Chat() {
  return (
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
      <Sidebar />
      <div className="bg-dash-col h-screen w-full rounded-tl-[30px] rounded-bl-[30px] flex flex-row overflow-y-auto scrollbar-thin scrollbar-thumb-white">
        <div className="py-10 px-6 flex flex-col space-y-5 w-1/5  ">
          <h1 className="text-3xl font-medium text-page-col w-full">Messages</h1>
          <FilterC />
          <Lista />
        </div>
        <div className="w-3/5 border-x-2 border-page-col border-opacity-10 flex flex-col ">
            <div className="flex flex-row border-y-2 border-page-col border-opacity-10 h-1/5 p-10">
                  <div>
                    <img src={Cat} className="h-16" />
                  </div>
                   <div className="flex flex-col justify-center items-start  ml-6">
                <h2 className="text-xl font-medium">
                    Nada Kouadri
                </h2>
                <h3 className="text-green text-lg font-extralight">Online</h3>
            </div>
            </div>
           
              </div>
        <div className=" items-center px-10 flex flex-col">
           <LittleSideBar Name="Ikram Debbih" img={My} />
           <div className="flex flex-col justify-center items-center mt-16">
                <div>
                <img src={BigCat} className="" /> 
                </div>
                <h1 className="text-2xl font-semibold">Nada Kouadri</h1>
                <h3 className="text-page-col text-opacity-45 text-lg font-extralight">ln_kouadri@esi.dz</h3>
                <p className="text-green text-lg font-extralight">online</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
