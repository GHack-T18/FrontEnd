import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import { PopUp } from './PopUp';

export const LittleSideBar = ({ Name, img }) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleRotation = () => {
    setIsRotated(!isRotated);
    setIsPopupVisible(!isPopupVisible); 
  };

  return (
    <div className='flex flex-col absolute top-4 right-9'>
      <div className='p-3 flex flex-row space-x-3 cursor-pointer w-full items-center justify-center' onClick={handleRotation}>
        <h1 className='text-xl font-normal'>{Name}</h1>
        <div>
          <img src={img} alt="p" className='' />
        </div>
        <div>
          <img src={icon} alt="Icon" className={isRotated ? 'rotate-180' : ''} />
        </div>
      </div>
      {isPopupVisible && <PopUp Name={Name} img={img} />}
    </div>
  );
};
