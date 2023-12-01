import React, { useRef } from 'react'

export default function Roadmap() {
  return (
    <div className='w-full overflow-hidden py-20 relative flex justify-center items-center border-y-4 border-white'>
        <div className='w-[80%] h-full flex'>
            <div className='w-1/3 flex justify-end items-center'>
              <img className='w-[18rem]' src="https://static.wixstatic.com/media/1f3f2b_33505209bd5340c581cc5e861ff74845~mv2.png/v1/crop/x_455,y_0,w_2691,h_2700/fill/w_370,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pepepissingnobackground%20copy.png" alt="" />
            </div>
            <div className='w-[30rem] flex flex-col items-center'>
              <div className='text-8xl text-white font-Urban-Melted outline-text'>Roadmap</div>
              <div className='flex flex-col justify-center items-start text-4xl shadow-[0px_0px_30px_-10px_#FFFFFF] 
                              border-2 w-3/4 px-7 py-5 text-white mt-10 bg-[#274f79] rounded-tr-3xl rounded-bl-3xl'>
                                Phase 1: Meme
                                <br></br>
                                Phase 2: Vibe and HODL
                                <br></br>
                                Phase 3: Meme Takeover
                              </div>
            </div>
            <div className='w-1/3 flex justify-end items-center'>
              <img className='w-[16rem]' src="https://www.symbols.com/images/symbol/2847_icy-tower-logo.png" alt="" />
            </div>
        </div>
    </div>
  )
}
