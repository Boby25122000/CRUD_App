import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserCard from '../../components/userCard/UserCard'

const Allusers = () => {

  const [users, setUsers] = useState([])

  async function getSignupUsers() {
    let resp = await axios.get("http://localhost:3000/users");
    console.log(resp);  // {data:[{}, {}, ............]}
    setUsers(resp.data)
  }

  useEffect(() => {
    getSignupUsers();
  }, []);

  return (
    <section className='px-14 py-5 w-full ms-2 mt-1 shadow'>
      <header className='flex justify-between flex-col md:flex-row'>
        <h1 className='text-2xl font-semibold text-blue-400'>User Management</h1>

        <Link to={"/adduser"} >
          <button className='border-2 px-6 py-2 rounded-full text-blue-400 font-semibold md:text-base cursor-pointer hover:bg-blue-400 hover:text-white '>
            ADD USER +
          </button>
        </Link>
      </header>

      <article className='py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 h-[60bh] overflow-y-scroll'>
        {users.length <= 0 ? (
          <h1 className='text-3xl text-center font-semibold opacity-25'> No Users </h1>
        ) : ( 
          users.map((user) => {
          return <UserCard user={user} key={user.id}/>;
        })
        )}
      </article>
    </section>

  )
}

export default Allusers