import React from 'react'

export default function Roadmap() {
  return (
    <div className='w-full overflow-hidden py-20 relative flex justify-center items-center border-b-4 border-white'>
        <div className='w-[80%] h-full flex'>
            <div>
              <img className='w-[80%]' src="https://static.wixstatic.com/media/1f3f2b_33505209bd5340c581cc5e861ff74845~mv2.png/v1/crop/x_455,y_0,w_2691,h_2700/fill/w_370,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pepepissingnobackground%20copy.png" alt="" />
            </div>
            <div className='w-[30rem] flex flex-col items-center'>
              <div className='text-7xl text-white font-bold'>Roadmap</div>
              <div className='flex flex-col justify-center items-start text-xl shadow-[0px_0px_30px_-10px_#FFFFFF] 
                              border-2 w-3/4 px-7 py-5 text-white mt-10 bg-[#264A20] rounded-tr-3xl rounded-bl-3xl'>
                                Phase 1: Meme
                                <br></br>
                                Phase 2: Vibe and HODL
                                <br></br>
                                Phase 3: Meme Takeover
                              </div>
            </div>
            <div>
              <img className='w-[80%]' src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_366,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T220301_142.pngs" alt="" />
            </div>
        </div>
    </div>
  )
}
