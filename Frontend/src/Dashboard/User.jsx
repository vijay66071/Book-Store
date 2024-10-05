import React from 'react'
import userImg from '../assets/About/person2.jpg';
const User = () => {
    return (
        <div className='flex'>
            <div className='m-40 '>
                <img className='h-20 w-20 cover rounded-full' src={userImg} alt="User_Image" />
                <label className='m-4 text-balance'>Emily</label>
            </div>
            <div className=' m-40 h-3/5 w-96 bg-white'>
                
            </div>
        </div>
    )
}
export default User