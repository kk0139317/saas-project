'use client';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    // background: '#efefef',
    // color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: '/images/image-1.png',
        caption: 'Image 1'
    },
    {
        url: '/images/image-1.png',
        caption: 'Image 2'
    },
    {
        url: '/images/image-1.png',
        caption: 'Image 3'
    },
];

const SlideShow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle} className=' bg-transparent ' >{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default SlideShow;