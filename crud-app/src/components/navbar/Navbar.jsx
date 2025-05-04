import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);

  const theme = () => {
    let root = document.documentElement
    console.log(root);
    root.classList.toggle("dark");
    setThemeMode(!themeMode);
  }

  return (
    <nav className='shadow-lg w-14 h-[90vh] p-3 mt-1 z-10'>
      <div className='p-1 text-xl flex justify-center cursor-pointer'>
        <IoHomeOutline />
      </div>
      <div className='p-1 text-xl flex justify-center my-5 cursor-pointer'>
        <FaRegUser />
      </div>
      <div className='p-1 text-xl flex justify-center cursor-pointer'>
        <AiOutlineUserAdd />
      </div>
      <div className='p-1 text-xl flex justify-center cursor-pointer mt-3 hover:text-blue-400' 
        onClick={theme}>
        {themeMode? <MdOutlineLightMode /> :<MdOutlineDarkMode />}
      </div>

    </nav>

  )
}

export default Navbar