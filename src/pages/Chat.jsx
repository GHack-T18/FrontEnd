import React from "react";
import Sidebar from '../components/SideBarrrr';
import FilterC from '../components/FilterC';
import Lista from '../components/Lista';
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
        <div className="w-3/5 border-x-2 border-page-col border-opacity-15">  </div>
      </div>
    </div>
  );
}

export default Chat;
