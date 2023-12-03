import React, { useRef } from 'react'

export default function Roadmap() {
  return (
    <div className='w-full overflow-hidden py-20 relative flex justify-center items-center border-y-4 border-white'>
        <div className='w-[80%] h-full flex blur-bg p-4 border-2 border-black rounded-lg'>
            <div className='w-1/3 flex justify-end items-center'>
              <img className='w-[600px]' src="../../PEE123.png" alt="" />
            </div>
            <div className='w-[30rem] flex flex-col items-center'>
              <div className='text-8xl text-white font-Urban-Melted outline-text text-gradiant'>Roadmap</div>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 border-[#274f79] rounded-tr-3xl rounded-bl-3xl shadow-lg
                      text-white mt-10 text-4xl text-center leading-[3rem]">
                                Phase 1: Meme
                                <br></br>
                                Phase 2: Vibe and HODL
                                <br></br>
                                Phase 3: Meme Takeover
                              </div>
            </div>
            <div className='w-1/3 flex justify-end items-center'>
              <img className='w-[16rem]' src="../../falling_harold.png" alt="" />
            </div>
        </div>
    </div>
  )
}
