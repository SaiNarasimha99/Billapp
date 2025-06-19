import React from 'react'
import { CgNametag } from "react-icons/cg";



const Register = () => {
  return (
    // <div className='bg-amber-950'>Register</div>
    
    <div className='bg-amber-100 flex justify-center items-center size-full'>
      
      <form action="" className='  bg-amber-200 w-1/2 h-1/2 rounded-3xl shadow-2xl flex justify-center items-center flex-col gap-4 px-[80px]  max-lg ' >
        <div >
          <h1 className='front-bold'>Register Login</h1>
        </div>
        <div   className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="text" placeholder='enter name'  className='w-full outline-0'/>
          <span><CgNametag /></span>
          
        </div>
        <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="text" placeholder='username'   className='w-full outline-0'/>
        </div>
        <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="email" placeholder='email'   className='w-full outline-0' />
        </div>
                <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="password"  placeholder='password'   className='w-full outline-0' />

        {/* <div >
         <button>click</button>
       </div> */}
        </div>
        <div   className='w-full outline-0 bg-black flex justify-center  border-2 rounded-sm px-2 py-1'>
          <button className='text-white'>click</button>
        </div>

      </form>
    </div>
  )
}

export default Register