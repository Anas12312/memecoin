import React from 'react'

export default function About() {
  return (
    <div className='w-full overflow-hidden py-20 relative flex justify-center items-center border-b-4 border-white'>
        <div className='w-[80%] h-full flex'>
            <div className=''>
                <img className='w-[36rem]' src='https://static.wixstatic.com/media/1f3f2b_b3f21b7f5c154daa84e020e5e2b5dc6f~mv2.png/v1/crop/x_0,y_0,w_3600,h_3605/fill/w_704,h_705,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/mmga1.png' />
            </div>
            <div className='w-[40rem] flex flex-col p-2'>
                <div className='text-7xl text-white text-center m-10 font-bold'>
                    about
                </div>
                <div className='text-2xl text-white'>
                    Harold, a tribute to the iconic meme, steps into the crypto arena, breaking free from the endless Inu coin frenzy. In a world cluttered with derivatives, Harold is here to reclaim the throne for memecoins on the Solana blockchain. Launched without a presale, featuring zero taxes, burnt LP, and a renounced contract, $HAROLD is a coin crafted for the people, fueled by the raw power of memes. Let Harold guide you on a meme-filled journey towards a brighter and more 
                </div>
            </div>
        </div>
    </div>
  )
}
