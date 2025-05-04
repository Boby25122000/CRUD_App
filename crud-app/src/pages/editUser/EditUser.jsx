import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const [updateUser, setUpdateUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    let { id } = useParams()
    console.log(id);
    
    async function getSingleUser() {
        let resp = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(resp);
        setUpdateUser(resp.data)
    };

    useEffect(() => {
        getSingleUser();
    }, []);

    let handleChange = (e) => {
        let {name, value} = e.target;
        setUpdateUser({ ...updateUser, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(updateUser);
        let resp = await axios.put(`http://localhost:3000/users/${id}`, updateUser);
        console.log(resp);
        if (resp) {
            navigator("/");
        }
    };
  return (
    <div className='absolute top-0 h-screen w-screen flex items-center justify-center'>
        <form className='bg-white p-5 rounded shadow-lg' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
            <h1 className='text-3xl text-black text-center py-2'>Edit User</h1>
                <label className='font-semibold py-2.5'>Username</label>
                <input type="text" className='bg-gray-100 p-1' value={updateUser.username} name='username' onChange={handleChange} />
            </div>
            
            <div className='flex flex-col'>
                <label className='font-semibold py-2.5'>Email</label>
                <input type="text" className='bg-gray-100 p-1' value={updateUser.email} name='email' onChange={handleChange} />
            </div>

            <div className='flex flex-col'>
                <label className='font-semibold py-2.5'>Password</label>
                <input type="text" className='bg-gray-100 p-1' value={updateUser.password} name='password' onChange={handleChange} />
            </div>
            <button className='bg-blue-400 px-6 py-2 rounded-full mt-4 block mx-auto cursor-pointer' type='submit'>
              Update
            </button>
        </form>
    </div>
    
  )
}

export default EditUser