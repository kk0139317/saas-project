import React from 'react'
import Close from '../Icons/Close'
import Link from 'next/link'
import StarIcon from '../Icons/StarIcon'
import DownloadIcon from '../Icons/DownloadIcon'
import LeftArrowIcon from '../Icons/Close/LeftArrowIcon'
import RightArrowIcon from '../Icons/Close/RightArrowIcon'
import SlideShow from '../SlideShow'
import { Slide } from 'react-slideshow-image'
import FullCloseIcon from '../Icons/Close/FullCloseIcon'

const HeroSectionCard = () => {
  return (
    <section className=' h-auto w-full bg-gray-800  rounded-2xl text-white mt-6 px-6 py-6'>
        <nav className=' w-full h-auto grid grid-cols-2 ' >
            <div className='flex flex-row' >
            <Close/>
            <div>

            <span className=' text-sm ml-4 -mt-1  ' >
                filename.jpg <span className=' bg-gray-100 text-gray-800 font-bold px-6  py-1 rounded ' >For Reference</span>
            </span><br />
            <span className=' text-xs font-light text-gra-300 ml-4' >12:50 / 12-Jan-2025</span>
            </div>

            </div>
            <div className=' grid grid-cols-2 ' >
                  <Link href=""
                      className='justify-end ml-auto flex '>
                      <DownloadIcon />
                      <span className='ml-2' >
                          Download
                      </span>
                  </Link>
                <Link href=""
                      className='justify-end ml-auto flex '>
                        <StarIcon/>
                        <span className='ml-2' >
                    Mark Favoroute
                        </span>
                </Link>
            </div>
        </nav>

        <div className=' grid grid-cols-2 w-full flex-wrap  mt-10 ' >
              <div className=' flex flex-col  ' >
                {/* <div className=' mx-auto flex flex-row ' >
                    <LeftArrowIcon/>
                    <span className=' px-4 ' >
                    2/3
                    </span>
                    <RightArrowIcon/>
                </div> */}
                <div className=' px-0 ' >
                    <SlideShow/>
                </div>
            </div >
            <div className=' pl-16 text-justify pr-2 ' >
                <p className=' font-bold text-xl my-2 ' >Lorem, ipsum.</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi reiciendis, voluptatum molestiae tempore magni, ad optio nam tenetur adipisci quam ipsum? Natus fuga repellat dicta sunt quisquam laborum iste illum quidem necessitatibus. Natus alias delectus dignissimos earum labore, dolorem sequi ratione quam cum explicabo libero, eum, eos a harum fugit?
                </p>

                <div className=' flex' >
                    <span className=' my-4 mx-4 flex bg-gray-500 pl-6 py-1 text-xs rounded font-extralight text-white  ' >
                         #tag 
                         <span className=' ml-2  px-2 pt-1 ' >
                         < FullCloseIcon/>
                         </span >
                          </span>
                    <span className=' my-4 mx-4 flex bg-gray-500 pl-6 py-1 text-xs rounded font-extralight text-white  ' >
                         #tag 
                         <span className=" ml-2 px-2 pt-1">
                         <FullCloseIcon/>   
                         </span>
                        </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSectionCard