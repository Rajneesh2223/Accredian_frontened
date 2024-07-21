import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='h-[60px] '>
        <div className='flex h-[60px]  items-center justify-between mx-4  sm:max-w-7xl  '>
        
        <div className='flex w-40'>
            <img src={logo} alt='logo '/>
            <button className='flex items-center'>Courses <span className='
            '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
             </span>
             </button>
        </div>
        
        <div className=' flex gap-4 justify-center items-center '>
            <div className='hidden md:block text-[15px] md:gap-10'>
                <ul className='flex  gap-16 font-semibold'>
                        <li>Refer And Earn </li>
                        <li>Resources  </li>
                        <li>About Us  </li>
                    </ul>
            </div>
            <button className='text-[14px] bg-gray-200 py-1 text-black px-2 rounded-md  '>
                Login
            </button>
            <button className='bg-blue-700 text-[14px] py-1 px-2 text-white rounded-md'>
                try for free 
            </button>
        </div>
        </div>

    </div>
  )
}

export default Navbar