
import { FaEnvelope } from "react-icons/fa";
import { FaAlgolia} from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import Sidebar from '../components/SideBarrrr';
import { FaUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import FilterC from "../components/FilterC";

import { LittleSideBar } from "../components/LittleSideBar";
import My from '../assets/My.png';


function Email() {


    const [search, setSearch] = useState("");

    const handleChange = (e) => {
      setSearch(e.target.value);
    };



  const [inboxClicked, setInboxClicked] = useState(false);
  const [sentClicked, setSentClicked] = useState(false);
  const [startedClicked, setStartedClicked] = useState(false);
  const [draftClicked, setDraftClicked] = useState(false);
  const [trashClicked, setTrashClicked] = useState(false);

  const handleInboxClick = () => {
    setInboxClicked(true);
    setSentClicked(false); // Réinitialiser le clic sur "Sent"
    setStartedClicked(false);
    setDraftClicked(false);
    setTrashClicked(false);
  };

  const handleSentClick = () => {
    setSentClicked(true);
    setInboxClicked(false); // Réinitialiser le clic sur "Inbox"
    setStartedClicked(false);
    setDraftClicked(false);
    setTrashClicked(false);
  };

  const handleStartedClicked = () => {
    setStartedClicked(true);
    setInboxClicked(false); // Réinitialiser le clic sur "Inbox"
    setSentClicked(false);;
    setDraftClicked(false);
    setTrashClicked(false);
  };

  const handleDraftClicked = () => {
    setDraftClicked(true);
    setInboxClicked(false); // Réinitialiser le clic sur "Inbox"
    setStartedClicked(false);
    setSentClicked(false);
    setTrashClicked(false);
  };

  const handleTrashClicked = () => {
    setTrashClicked(true);
    setInboxClicked(false); // Réinitialiser le clic sur "Inbox"
    setStartedClicked(false);
    setSentClicked(false);
    setDraftClicked(false);
  };






 


    return (
   













<div className='flex flex-row w-screen h-[100vh] bg-page-col '>
<Sidebar />
<div className="bg-dash-col h-screen w-full rounded-tl-[30px] rounded-bl-[30px]"> 
<LittleSideBar Name="Ikram Debbih" img={My} />

<div >
          <div className="relative">
            <button className="bg-pinkii hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mr-8 absolute md:top-20 md:right-30 ml-20 ">
              New Email
            </button>
          </div>
          <div className="flex justify-start mb-4 mr-4">
            <div className="flex flex-col absolute md:top-40 md:right-30 ml-20">

              <button  className="mb-4"  onClick={handleInboxClick}> 
              
                  <span className={`flex items-center ${inboxClicked ? 'text-pinkii' : 'text-black'}`}>  <FaEnvelope style={{ marginRight: '10px' }} />Inbox   </span> 
               </button>




               {inboxClicked && (
  <div className="fixed top-0 right-0 h-full w-full flex justify-end items-center">
    <div className="bg-white p-8 rounded-lg w-1/2 h-full ">
    <div className=" mb-20">
        <button className="flex  absolute   right-10 mb-20" > 
                <span className={`flex items-center `}>    <FaUser style={{ marginRight: '10px' }} /> Ikrem Debih </span> 
              </button>

    </div>

      <div className="flex justify-between items-center mb-8">


     


      <span>
        <div className="font-semibold "> Abla Rabia</div>
        <div > la_rabia@esi.dz</div>
      </span>
        <div className="text-sm">12.12.2024 - 10.25</div>
      </div>
      <div className=" border-t border-b border-gray-800 py-10">
        {/* Contenu de l'e-mail */}
        
        <div   className="flex  absolute   right-10">
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
        <div>Contenu de l'e-mail...</div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, 
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, 
        consequat in, pretium a, enim.Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. 
       Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit
      
       </p>
      </div>
       {/* Contenu de l'e-mail 
      <button className="mt-20 bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" onClick={() => setInboxClicked(false)}>Fermer</button>
      */}
      <button className="mt-20 bg-pinkii hover:bg-yellow-600 text-black py-1 px-4 rounded" style={{ marginRight: '20px' }}   onClick={() => setInboxClicked(false)} >index.html</button>

      <button className="mt-20 bg-pinkii hover:bg-yellow-600 text-black  py-1 px-4 rounded" style={{ marginRight: '20px' }} >file.pdf</button>

      <button className="mt-20 bg-pinkii hover:bg-yellow-600 text-black  py-1 px-4 rounded" style={{ marginRight: '20px' }} >img.png</button>

</div>
  </div>
)}






















              <button className="mb-4" onClick={handleSentClick} > 
                <span className={`flex items-center ${sentClicked ? 'text-pinkii' : 'text-black'}`}>    <FaLocationArrow style={{ marginRight: '10px' }} /> Sent </span> 
              </button>


              {sentClicked && (
  <div className="fixed top-0 right-0 h-full w-full flex justify-end items-center">
    <div className="bg-white p-8 rounded-lg w-1/2 h-full ">
    <div className=" mb-20">
        <button className="flex  absolute   right-10 mb-20" > 
                <span className={`flex items-center `}>    <FaUser style={{ marginRight: '10px' }} /> Ikrem Debih </span> 
              </button>

    </div>

    <div className="mb-8">
  <div className="inline-block  mr-20">To:</div>
  <div className="inline-block font-semibold mr-5">Abla Rabia</div>
  <div className="inline-block mr-10">la_rabia@esi.dz</div>
</div>

      <div className=" border-t border-b border-gray-800 py-10">
        {/* Contenu de l'e-mail */}
        
      
        <div className="text-2xl text-gray-500 mb-8"> Object: ..</div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, 
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, 
        consequat in, pretium a, enim.Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. 
       Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit
      
       </p>
      </div>
      
      <button className="mt-40 bg-pinkii hover:bg-yellow-600 text-black py-1 px-8  absolute md:right-10  " onClick={() => setSentClicked(false)}> Send </button>
      
    

</div>
  </div>
)}

















              
              <button className="mb-4" onClick={handleStartedClicked}> 
              <span className={`flex items-center ${startedClicked ? 'text-pinkii' : 'text-black'}`}> <FaRegStar style={{ marginRight: '10px' }} /> Startted </span> 
              </button>


              <button className="mb-4" onClick={handleDraftClicked} > 
              <span className={`flex items-center ${draftClicked ? 'text-pinkii' : 'text-black'}`}>  <RiDraftLine style={{ marginRight: '10px' }}  />Draft  </span>  
              </button>


              <button className="mb-4"  onClick={handleTrashClicked}> 
              <span className={`flex items-center ${trashClicked ? 'text-pinkii' : 'text-black'}`}> <FaRegTrashAlt style={{ marginRight: '10px' }} background='gray' /> Trash  </span> 
              </button>
            </div>
          </div>







          <div className={`max-w-3xl mx-auto mt-0 px-4 ${inboxClicked ? 'bg-page-col bg-opacity-5' : ''} ${sentClicked ? 'bg-page-col bg-opacity-5' : ''}`}>
             



        


          <FilterC />





          <div>
          
            <div className="mt-20 border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">


           
              <div className="flex justify-between items-center ">
             
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>



            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>



            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>



            
            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>





            
            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>






            
            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>



            <div className="border border-gray-300 rounded-lg  px-4  py-2 mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="font-semibold">Sender Name</div>
                <div>
                  <button className="mr-2"> <FaRegTrashAlt  />  </button>
                 
                  <button>  <FaRegStar  />    </button>
                   
                 
                </div>
              </div>
              <div>Content of the email goes here...</div>
            </div>
            {/* Add more emails here */}
          </div>
        </div>
        </div>











 </div>
</div>








      );
    }

export default Email;
