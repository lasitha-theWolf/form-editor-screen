import React from 'react';
import { FaCog } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

export default function DemoForm() {

  const defaultImage = './images/defaultimg.jpeg';

  const [isWelcomeScreenOpen, setIsWelcomeScreenOpen] = useState(false);
  let [welcomeTitle, setWelcomeTitle] = useState('Welcome to our form');
  let [welcomeDescription, setWelcomeDescription] = useState('This is a description of the form');
  const [imageSrc, setImageSrc] = useState(defaultImage);
  let [placement, setPlacement] = useState('left');

  const handleInputChangeWelcomeDescription = (e) => {
    setWelcomeDescription(e.target.value);
  }

  const handleInputChangeWelcomeTitle = (e) => {
    setWelcomeTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const RemoveImage = () => {
    setImageSrc(null);
  }

  const handePlacementLeft = () => {
    setPlacement('left');
  }

  const handePlacementRight = () => {
    setPlacement('right');
  }


  return (
    <>

      <div className="flex h-screen mb-10">

        {/* Welcome Screen Modal */}
        {isWelcomeScreenOpen && (
          <div className="w-1/4 p-6 ">
            <div className="flex items-center justify-between py-4 ">
              <div className="flex items-left space-x-2">
                <FaCog className="text-black cursor-pointer" />
                <span className="text-black font-medium">Settings</span>

              </div>
              <AiOutlineClose onClick={() => setIsWelcomeScreenOpen(false)} className="text-gray-600 cursor-pointer border-spacing-1 border-gray-600" />
            </div>

            <div className='gap-3'>
              <div className='text-left font-semibold'>Title</div>
              <input
                type="text"
                value={welcomeTitle}
                onChange={handleInputChangeWelcomeTitle}
                className="w-full border p-2 rounded-lg"
              />

              <div className='text-left font-semibold mt-3'>Description</div>
              <input
                type="text"
                value={welcomeDescription}
                onChange={handleInputChangeWelcomeDescription}
                className="w-full border p-2 rounded-lg"
              />

              <div className='text-left font-semibold mt-3'>Upload Image</div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-2"
              />
              <div className="mt-4 border-gray-600 border-collapse">
                <img src={imageSrc} alt="Preview" className="w-full h-auto rounded-lg " />
              </div>
              <button className='rounded-lg border border-gray-700 px-2 py-2 mt-3' onClick={RemoveImage}>Remove Image</button>
            </div>

            <div>
              <div className='text-left font-semibold mt-3'>Placement
              <button className='mx-3 '>
                <span onClick={handePlacementLeft} className="bg-gray-100 text-black py-2 px-3 rounded-2xl">☰◼️</span>
              </button>
              <button>
                <span onClick={handePlacementRight} className="bg-gray-100 text-black py-2 px-3 rounded-2xl">◼️☰</span>
              </button>
            </div>
            </div>

            <div className='mt-5'>
              <button onClick={() => setIsWelcomeScreenOpen(false)}>
                <span className="bg-black text-white py-2 px-10 rounded-xl">Save</span>
              </button>
              <button className='ml-3' onClick={() => setIsWelcomeScreenOpen(false)}>
                <span className="bg-gray-100 text-red-500 py-2 px-10 rounded-xl">Discard</span>
              </button>
            </div>

          </div>

        )}



        {/* Sidebar */}
        {!isWelcomeScreenOpen && (
          <div className="w-1/4  p-6">
            <div className="flex items-center justify-between py-4 ">
              <div className="flex items-left space-x-2">
                <span className="text-gray-500">🏠</span>
                <span className="text-gray-500">Dashboard</span>
                <span className="text-gray-500">›</span>
                <span className="text-black font-medium">Demo Form</span>
              </div>
              <FaCog className="text-gray-500 cursor-pointer" />
            </div>

            {/* Tabs inside Sidebar */}
            <div className="mb-6 flex ">
              <button className="flex-1 px-2 py-2 bg-white rounded-lg shadow">Content</button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-500">Design</button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-500">Share</button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-500">Replies</button>
            </div>

            {/* Form Steps */}
            <div className="text-lg font-semibold text-left">☰ Steps</div>
            <p className='text-gray-400 mb-4 ml-0 text-left'>The steps users will take to complete the form</p>
            <ul className="space-y-2 text-center">
              <li onClick={() => setIsWelcomeScreenOpen(true)} className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center cursor-pointer">
                <span >Welcome screen</span>
              </li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
                <span>Enter your name</span>
                <button className="text-gray-500 font-semibold">✖</button>
              </li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
                <span>Enter your email</span>
                <button className="text-gray-500 font-semibold">✖</button>
              </li>
            </ul>
            <div className="flex justify-start">
              <button className="mt-4  py-2 px-2 rounded-lg border border-gray-700">+ Add field</button>
            </div>


          </div>
        )}

        {/* Main Content */}
        <div className="w-3/4 p-20 flex flex-row items-center gap-10 ml-10 rounded-xl border shadow-md m-2">

          <div className= {placement = 'left' ? "flex-col text-left": "flex-col text-right"}>
            <h1 className="text-5xl font-bold">{welcomeTitle}</h1>
            <p className="text-gray-700 text-xl font-semibold mt-4">{welcomeDescription}</p>
            <button className='mt-3 me-5'>
              <span className="bg-black text-white py-2 px-3 rounded-2xl">Start</span>
              <span className="ml-2 text-sm">press Enter ⏎</span>
            </button>
          </div>

          <div className="ml-15 flex-col ">
            <img src={imageSrc} alt="Preview" className="w-1/2 h-auto rounded-lg ml-20" />
          </div>

        </div>


      </div>
    </>
  );
}
