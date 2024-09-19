import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaCog } from 'react-icons/fa';
import { useState } from 'react';

const FormTextNameField = (props) => {

    const [title, setTitle] = useState('Enter your name');
    const [description, setDescription] = useState('This will be used to address you');

    let [name, setName] = useState('');
    let [isValid, setIsValid] = useState(false);

    const validateName = (value) => {
        const namePattern = /^[a-zA-Z\s]+$/;
        return namePattern.test(value);
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsValid(value === '' || validateName(value));
    };

    const handleInputChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleInputChangeDescription = (e) => {
        setDescription(e.target.value);
    }


    return (
        <>
            <div className="w-1/4 p-6 ">
                <div className="flex items-center justify-between py-4 ">
                    <div className="flex items-left space-x-2">
                        <FaCog className="text-black cursor-pointer" />
                        <span className="text-black font-medium">Settings</span>

                    </div>
                    <AiOutlineClose onClick={() => props.handleCloseAll()} className="text-gray-600 cursor-pointer border-spacing-1 border-gray-600" />
                </div>

                <div className='gap-3'>
                    <div className='text-left font-semibold'>title</div>
                    <input
                        type="text"
                        value={title}
                        onChange={handleInputChangeTitle}
                        className="w-full border p-2 rounded-lg"
                    />

                    <div className='text-left font-semibold mt-3'>description</div>
                    <input
                        type="text"
                        value={description}
                        onChange={handleInputChangeDescription}
                        className="w-full border p-2 rounded-lg"
                    />
                    <div className='text-left font-semibold mt-3 flex flex-row'>
                        required&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='flex items-center'>
                            <label className="relative inline-flex items-end cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </label>
                        </span>
                    </div>
                </div>

                <div className='mt-5'>
                    <button onClick={() => props.handleCloseAll()}>
                        <span className="bg-black text-white py-2 px-10 rounded-xl hover:bg-gray-800">Save</span>
                    </button>
                    <button className='ml-3' onClick={() => props.handleCloseAll()}>
                        <span className="bg-gray-100 text-red-500 py-2 px-10 rounded-xl hover:bg-red-200 hover:text-red-600">Discard</span>
                    </button>
                </div>
            </div>

            <div className="w-3/4 p-15 flex flex-col items-center justify-center ml-10 rounded-xl border shadow-md m-2 h-screen">
                <div className='text-left'>
                    <div className="text-gray-700 text-xl font-semibold">{title}</div>
                    <div className="text-gray-700 text-xl font-semibold mt-3">{description}</div>

                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Type your name here..."
                        className={`mt-4 w-full border-b-2 outline-none text-gray-700 text-lg pb-2 placeholder-gray-400 ${isValid ? 'border-gray-300' : 'border-red-500'}`}
                    />

                    {/* Validation message */}
                    {!isValid && (
                        <div className="text-red-500 text-sm mt-2">
                            Please enter a valid name. Only letters and spaces are allowed.
                        </div>
                    )}
                </div>
            </div>

        </>

    )
}

export default FormTextNameField