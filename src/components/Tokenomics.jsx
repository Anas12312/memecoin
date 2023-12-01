import React from 'react'

export default function Tokenomics() {
  return (
    <div className='w-full overflow-hidden pt-14 pb-32 relative bg-green flex flex-col items-center border-y-4 border-white'>
      <div className='text-8xl text-white font-Urban-Melted outline-text'>
        TOKENOMICS
      </div>

      <div className='flex flex-col justify-center mt-16 items-center text-4xl text-white font-Chewy '>
        <div>token supply:</div>
        <div className='text-4xl'>690,000,000,000,000</div>
      </div>


      <div className='flex flex-col justify-center items-start text-4xl shadow-[0px_0px_30px_-10px_#FFFFFF] 
                              border-4 border-[#274f79] w-2/4 px-7 py-5 text-[#274f79] mt-10 bg-[#ffffff] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl'>
        <div>No Taxes, No Bullshit. It’s that simple. </div>
        <br></br>
        <div>LP tokens are burnt, and contract ownership is renounced. </div>
      </div>
      
    </div>
  )
}
