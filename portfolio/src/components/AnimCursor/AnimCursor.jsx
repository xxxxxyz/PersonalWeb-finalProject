import React, {useState, useEffect } from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {

  return (
    <div className='cursor-shape'>
        <AnimatedCursor 
            innerSize={10}
            outerSize={10}
            color='29,91,121'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
        />
    </div>
  )
}

export default AnimCursor