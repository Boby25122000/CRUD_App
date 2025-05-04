import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addusres = () => {

  // to store form data
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // to update new data in state
  let handleChange = (e) => {
    let { name, value }= e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  let  useNavigate

  // to post data to backend
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupUser);
    let resp = axios.post("http://localhost:3000/users", signupUser);

    console.log(resp);
    if (resp) {
      // navigete to all user page
      navigator("/")
    }
  };

  return (
    <div className='sticky top-0 h-screen w-screen flex items-center justify-center'>  
        <form className='bg-white dark:bg-gray-700 p-5 rounded shadow-lg' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
            <h1 className='text-3xl text-black text-center py-2'>Create User</h1>
                <label className='font-semibold py-2.5'>Username</label>
                <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300 dark:text-black' value={signupUser.username} name='username' onChange={handleChange} />
            </div>
            
            <div className='flex flex-col'>
                <label className='font-semibold py-2.5'>Email</label>
                <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300 dark:text-black' value={signupUser.email} name='email' onChange={handleChange} />
            </div>

            <div className='flex flex-col'>
                <label className='font-semibold py-2.5'>Password</label>
                <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300 dark:text-black' value={signupUser.password} name='password' onChange={handleChange} />
            </div>
            <button className='bg-blue-400 px-6 py-2 rounded-full mt-4 block mx-auto cursor-pointer' type='submit'>
              Create User
            </button>
        </form>
    </div>
  )
}

export default Addusres