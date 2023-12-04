import React, { useRef } from 'react'

export default function Main() {

    const myRef = useRef(null)

    return (
        <div className='container'>
            <div className='w-full overflow-hidden pb-20 relative border-white h-[40rem]' ref={myRef}>
                <img className='object-cover opacity-20' src="" alt="" />
                <div className='w-full h-full absolute top-0 flex flex-col justify-center items-center'>
                    <div className='h-[55%] text-white w-[60%] flex justify-between items-center blur-bg p-4 border-2 border-black rounded-lg'>
                        <div className='h-full w-[80%] flex justify-start items-start flex-col'>
                            <div className='p-5 text-6xl font-Next-Bravo outline-text text-gradiant'>
                                <h1>$Harold</h1>
                            </div>
                            <div className='p-5 text-4xl w-4/5 font-Chewy'>
                                Harold, the Icy Tower legend, just crash-landed into the Solana blockchain, dropping his token bomb to wipe out those frog tokens!    
                            </div>
                        </div>
                        <div className='h-full w-[28%]'>
                            <img className='w-[22rem]' src="../../falling_harold.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}