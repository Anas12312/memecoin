import React from 'react'

export default function About() {
    return (
        <div>
            <div className='w-full overflow-hidden py-20 relative flex justify-center items-center container'>
                <div className='w-[80%] h-full flex blur-bg p-4 border-2 border-black rounded-lg'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img className='w-[22rem]' src='../../HAROLD_FULL_BODY.png' />
                    </div>
                    <div className='w-[40rem] flex flex-col p-2'>
                        <div className='text-8xl text-white text-center m-10  font-Urban-Melted outline-text text-gradiant'>
                            about
                        </div>
                        <div className='text-3xl text-white font-Chewy'>
                            Harold, channeling his inner game character icon, takes a cosmic dive into the crypto colosseum, breaking free from the never-ending Inu coin chaos. Epic entrance level: Over 9000!

                            In the wild world of crypto derivatives, behold the rise of our quirky hero, Harold! He's on a mission to reclaim the memecoin throne on the Solana blockchain. With zero taxes, burnt LP, and a renounced contract, $HAROLD becomes the official currency for OG gamers, powered by the unruly force of memes. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
