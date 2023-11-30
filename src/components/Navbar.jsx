import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar z-10'>
        <div className='mr-5'><img src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_211,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pepetitle.png" alt="" /></div>
        <div className='nav-bar-item trans'>Home</div>
        <div className='nav-bar-item trans'>About</div>
        <div className='nav-bar-item trans'>Tokenomics</div>
        <div className='nav-bar-item trans'>Roadmap</div>
        <div className='nav-bar-item trans'>Air Drop</div>
        <div className='nav-bar-item trans'>Pre Sale</div>
        <div className='nav-bar-buy-now trans'>buy now</div>
        <div className='p-5 text-3xl flex justify-start items-center'>
          <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'>
            <img src="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twitter%20(2).png" alt="" />
          </div>
          <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'>
            <img src="https://static.wixstatic.com/media/1f3f2b_0078029a112449e5b8d712401bfbd5ac~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/telgrrgrgrgr.png" alt="" />
          </div>
        </div>
    </div>
  )
}
