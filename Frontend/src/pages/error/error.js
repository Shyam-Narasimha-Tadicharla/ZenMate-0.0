import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from "../../svgs/logoSVG";


function Error() {
  const navigate =  useNavigate();
  return (
    <div className='h-screen p-4' style={{background : '#f6f3ef'}}>
        <div className='flex flex-row gap-2 absolute'>
          <Logo />
          <Link to="/" className="flex items-center space-x-2">
                    <span className="text-3xl ">ZenMate</span>
                    <div className="border-l-2 border-gray-300 pl-2">
                      <div className="text-sm uppercase">Mental</div>
                      <div className="text-sm uppercase">Wellness</div>
                    </div>
          </Link>
        </div>
        <div className='h-full flex flex-col items-center justify-center gap-2'>
            <h1 className='text-8xl'>404</h1>
            <p>Page Not Found</p>
            <button className='w-52 p-1 rounded' style={{background : '#fccb5e'}} onClick={()=>{
              navigate('/')
            }}>Go to Home Page</button>
        </div>
    </div>
  )
}

export default Error
