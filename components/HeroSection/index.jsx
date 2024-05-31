import React from 'react'
import Link from 'next/link'
import HeroSectionCard from './HeroSectionCard'

const HeroSection = () => {
  return (
    <section 
    className=' w-full h-auto flex mx-0 my-0'
    >
          <div className=' flex flex-col sm:w-2/3 w-full h-auto mx-auto my-12 ' >
            <div className="container text-xs font-extralight justify-center mx-auto text-center ">
                <span className=' bg-green-500 rounded-full px-2 py-1 font-normal' >NEWS</span> 
                <span>  We won the 2024 App of the Year award at SXSW</span>
            </div>
            <div className=' sm:text-5xl text-3xl font-semibold mx-auto text-center my-4' >
                Smart Solution for  <br /> Flavorful Success 
            </div>
            <div  className=' text-sm text-center sm:w-2/3 justify-center sm:mx-auto mx-auto my-2 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo omnis repellendus hic inventore aut perferendis qui minima ab architecto?
            </div>
            <div className='flex flex-col' >
              <Link href="javascript:void(0)"  className=" mx-auto justify-center my-4 py-2 px-16 text-white bg-purple-900 hover:bg-purple-950 rounded-md shadow">
                  Start free trial
              </Link>
              <span className=' font-light text-xs mx-auto ' > Start your 14 days free trial </span>
            </div>
            <HeroSectionCard/>
        </div>

    </section>
  )
}

export default HeroSection