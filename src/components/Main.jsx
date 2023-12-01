import React, { useRef } from 'react'

export default function Main() {
    const myRef = useRef(null)

    return (
        <div className='w-full overflow-hidden pb-20 relative border-y-4 border-white h-[40rem]' ref={myRef}>
            <img className='object-cover opacity-20' src="" alt="" />
            <div className='w-full h-full absolute top-0 flex flex-col justify-center items-center'>
                <div className='h-[55%] text-white w-[60%] flex justify-between items-center'>
                    <div className='h-full w-[80%] flex justify-start items-start flex-col'>
                        <div className='p-5 text-4xl font-bold font-sans'>
                            $Harold
                        </div>
                        <div className='p-5 text-3xl w-4/5'>
                            the meme champion disrupting the crypto arena. The canine craze fades as Harold steps up to claim the throne from Pepe!
                        </div>
                    </div>
                    <div className='h-full w-[20%]'>
                        <img className='w-[22rem]' src="https://www.symbols.com/images/symbol/2847_icy-tower-logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}
