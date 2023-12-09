import React from 'react'

export default function Tokenomics() {
  return (
    <div className='w-full overflow-hidden pt-14 pb-32 relative bg-green flex flex-col items-center border-white container-anas'>
      <div className='flex flex-col items-center blur-bg p-8 border-2 border-black rounded-lg'>
        <div className='text-8xl text-white font-Urban-Melted outline-text text-gradiant'>
          TOKENOMICS
        </div>

        <div className='flex flex-col justify-center mt-16 items-center text-4xl text-white font-Chewy '>
          <div>token supply:</div>
          <div className='text-4xl'>690,000,000,000,000</div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg
                      text-white mt-10 text-4xl border-[#274f79]">
            Simple and transparent $HAROLD stands by a no-tax policy 
            <br></br>
            – no room for any nonsense.
            <br></br>
            LP tokens? Burnt to a crisp. Contract ownership? Totally renounced.
            <br></br>
            Keeping it clear, clean, and community-driven. Welcome to the $HAROLD revolution! 
        </div>
        {/* <div className='flex flex-col justify-center items-start text-4xl shadow-[0px_0px_30px_-10px_#FFFFFF] 
                              border-2 w-2/4 px-7 py-5 text-white mt-10 bg-[#274f79] rounded-tr-3xl rounded-bl-3xl'>
        <div>No Taxes, No Bullshit. It’s that simple. </div>
        <br></br>
        <div>LP tokens are burnt, and contract ownership is renounced. </div>
      </div> */}

      </div>

    </div>
  )
}
