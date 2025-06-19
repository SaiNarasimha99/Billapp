import React, { useState } from 'react'
import { CgNametag, CgPassword } from "react-icons/cg";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";









const Register = () => {
  let[formdat,setformdata]=useState({
    username:"",
    Password:"",
    email:"",
    name:""


  })
  let handleChange=(e)=>{
    let {name,value}=e.target
    setformdata({...formdat,name:[value]})
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdat);
    
  }
  return (
    // <div className='bg-amber-950'>Register</div>
    
    <div className='bg-amber-100 flex justify-center items-center size-full'>
      
      <form action="" className='  bg-amber-200 w-1/2   rounded-3xl shadow-2xl flex justify-center items-center flex-col gap-4 px-[90px] max-sm:w-[90%] py-20 'onSubmit={handleChange} >
        <div >
          <h1 className='front-bold text-3xl max-sm:text-sm '>Register Login</h1>
        </div>
        <div   className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="text" placeholder='enter name' name='name'  className='w-full outline-0'onChange={handleChange}/>
          <span><CgNametag /></span>
          
        </div>
        <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="text" placeholder='username' name='username'   className='w-full outline-0'onChange={handleChange}/>
          <span><MdDriveFileRenameOutline /></span>
        </div>
        <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="email" placeholder='email' name='email'  className='w-full outline-0'onChange={handleChange} />
          <span><MdAlternateEmail /></span>
        </div>
                <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="password"  placeholder='password' name='password'  className='w-full outline-0'onChange={handleChange} />
          <span><RiLockPasswordFill /></span>
        </div>
        <div className='w-full flex justify-center border-2 rounded-sm px-2 py-1'>
          <input type="password"  placeholder='re-password'   className='w-full outline-0' onChange={handleChange}/>
          <span><RiLockPasswordLine /></span>
        </div>

        <div   className='w-full outline-0 bg-black flex justify-center  border-2 rounded-sm px-2 py-2 '>
          <button className='text-white'>click</button>
        </div>

      </form>
    </div>
  )
}

export default Register