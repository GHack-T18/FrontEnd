import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

export const PopUp = ({ Name, img }) => {
  const [isRotated, setIsRotated] = useState(false);


  return (
    <div className=' bg-dash-col shadow-lg flex flex-row space-x-3  w-full items-center justify-center h-24 rounded-[8px] ' >
        <div className=''>
        <img src={img} alt="pro" className='w-24 ' />
      </div>
      <div className='flex flex-col space-y-1 w-full justify-center items-start'>
        <h2 className='inline'>Ikram Zineb Debbih</h2>
        <button
        className='justify-center items-center text-md w-fit px-3 h-6 cursor-pointer bg-pinkii text-page-col rounded-[8px] '
      >
          Edit profile
        </button>
      </div>

    </div>
  );
};
