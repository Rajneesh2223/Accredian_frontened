import React from 'react'
import home from '../assets/home.png'

const Home = () => {
  return (
    <div>
        <div className='sm:mb-10'>
            <div className='flex justify-center mt-10 h-[40px] sm:h-[50px] md:mt-[20px] '>
            <div className='bg-blue-200 w-[450px] sm:w-[600px] rounded-full   flex justify-center items-center'>
                  <ul className='flex gap-16 sm:gap-28 justify-center'>
                      <li>Refers </li>
                      <li>Benefits </li>
                      <li>FAQ's</li>
                      <li>Support</li>
                  </ul>
            </div>
            </div>
           
            <div className='mt-10 sm:grid sm:grid-cols-2 border-black border relative sm:w-[900px] sm:m-auto sm:mt-10 sm:rounded-xl
            sm:bg-blue-50
            '>
                    <div className=' relative'>
                          <div className='pb-20 pt-16 sm:py-8'>
                               <h1 className='text-6xl font-extrabold ml-[100px]'>Let's Learn <br/> & Earn</h1>
                                   <p className='mt-16 mb-0 font-semibold text-2xl ml-[100px]'>
                                       Get a Chance to win  
                                       <br/>
                                       up-to <span className='text-3xl text-blue-600'>Rs. 15000</span>
                                   </p>
                               <button className='absolute  sm:mt-8 mt-8 left-[100px] p-2 bg-blue-600 text-white rounded'>Refer Now</button>
                          </div>
                    </div>
                <div className=' '>
                    <div className='relative'>
                         <img className='h-auto w-auto   ' src={home} alt='homeImage ' />
                   </div>
                </div>

            </div>


        </div>



    </div>
  )
}

export default Home