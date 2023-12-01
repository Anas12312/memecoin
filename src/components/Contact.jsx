import React from 'react'

export default function Contact() {
  return (
    <div className='w-full overflow-hidden pt-20 relative flex justify-center items-center'>
        <div className='w-[50%] h-full flex flex-col items-center'>
            <div className='text-7xl text-white mb-14'>Contact</div>
            <div className='text-xl text-white mb-8'>
                <img className='w-52' src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_264,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pepetitle.png" alt="" />
            </div>
            <div className='p-5 text-3xl flex justify-start items-center mb-8'>
                <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'>
                    <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
                </div>
                <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'>
                    <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
                </div>
            </div>
            <div className='text-xl text-white mb-12 text-center'>
                $Harold is not affiliated with Free Lunch Design or any of its creations. Introducing a unique meme coin on the Solana blockchain, crafted to pay homage to the games of our childhood that filled our days with joy and nostalgia. 
            </div>
            <div className='text-xl text-white mb-10 text-center'>
                $HAROLD is a meme coin for fun, without real value or financial expectations. It has no official team, roadmap, or practical use—it's purely for entertainment.    
            </div>
        </div>
    </div>
  )
}
