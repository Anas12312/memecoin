import React from 'react'

export default function About() {
    return (
        <div>
            <div className='w-full overflow-hidden py-20 relative flex justify-center items-center'>
                <div className='w-[80%] h-full flex blur-bg p-4 border-2 border-black rounded-lg'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img className='w-[22rem]' src='../../HAROLD_FULL_BODY.png' />
                    </div>
                    <div className='w-[40rem] flex flex-col p-2'>
                        <div className='text-8xl text-white text-center m-10  font-Urban-Melted outline-text text-gradiant'>
                            about
                        </div>
                        <div className='text-3xl text-white font-Chewy'>
                            Harold, a tribute to the iconic meme, steps into the crypto arena, breaking free from the endless Inu coin frenzy. In a world cluttered with derivatives, Harold is here to reclaim the throne for memecoins on the Solana blockchain. Launched without a presale, featuring zero taxes, burnt LP, and a renounced contract, $HAROLD is a coin crafted for the people, fueled by the raw power of memes. Let Harold guide you on a meme-filled journey towards a brighter and more
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
