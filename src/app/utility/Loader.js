import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = ({show}) => {
  return (
   show&&<div className='bg-black bg-opacity-50 fixed w-full h-full top-0'>
       <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <PropagateLoader color='#D14F4F' size={30}/>
       </div>
    </div>
  )
}

export default Loader
