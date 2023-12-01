import React from 'react'

export default function About() {
  return (
    <div className='w-full overflow-hidden py-20 relative flex justify-center items-center border-b-4 border-white'>
        <div className='w-[80%] h-full flex'>
            <div className='w-1/2 flex justify-center items-center'>
                <img className='w-[20rem]' src='https://www.symbols.com/images/symbol/2847_icy-tower-logo.png' />
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
