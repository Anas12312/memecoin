import React from 'react'

export default function Tokenomics() {
  return (
    <div className='w-full overflow-hidden pt-14 pb-32 relative bg-green flex flex-col items-center border-b-4 border-white'>
      <div className='flex justify-center items-center font-bold text-7xl  text-white'>
        TOKENOMICS
      </div>

      <div className='flex flex-col justify-center mt-16 items-center font-bold text-3xl text-white'>
        <div>token supply:</div>
        <div className='text-4xl'>690,000,000,000,000</div>
      </div>

      <div className='flex flex-col justify-center items-start text-xl  
        border-2 w-6/12 px-7 py-5 text-white mt-10 bg-[#264A20] rounded-tr-3xl rounded-bl-3xl '>
        <div>No Taxes, No Bullshit. It’s that simple. </div>
        <br></br>
        <div>LP tokens are burnt, and contract ownership is renounced. </div>
      </div>
      
    </div>
  )
}
